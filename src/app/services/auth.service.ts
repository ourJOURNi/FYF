import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProfileService } from './profile.service';
import { JobsService } from './jobs.service';
import { EventsService } from './events.service';
import { PostsService } from './post.service';
import { MentorsService } from './mentor.service';

// Model of User BEFORE they are registered
interface User {
  fullName: string;
  about: string;
  gender: string;
  dob: string;
  phone: string;
  school: string;
  grade: string;
  profilePicture: string;
  resume: string;
  email: string;  
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  downloadPrompt;
  authenticationState = new BehaviorSubject(false);
  user: User;
  loginSub: Subscription;
  activeEmail: string;
  userProfilePicture: string;
  populateDataSub: Subscription;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private profile: ProfileService,
    private jobs: JobsService,
    private events: EventsService,
    private posts: PostsService,
    private mentors: MentorsService,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private plt: Platform,
    private router: Router,
    private toast: ToastController) {

      // Inside the constructor we always check for an existing token so we can automatically log in a user
      this.plt.ready().then(() => {
        this.checkToken();
      });
      this.authenticationState.subscribe();
  }

  /**
   * Looks up our storage for a valid JWT and if found, 
   * changes our authenticationState.
   * 
   *  - Auth Token
   *  - User Details
   *  - Data that Populates the following Sections:
   *    ~ Jobs & User's Favorite Jobs
   *    ~ Events & User's Favorite Events
   *    ~ Posts, User's Posts & User's Favorite Posts
   *    ~ Mentors
   * 
   */
  async checkToken() {
    this.storage.get(this.TOKEN_KEY).then(async token => {
      if (token) {

        // Decode Token
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        // If Token is expired, remove Token.
        if (!isExpired) {

          // Get User Details
          this.activeEmail = decoded['email'];
          await this.didPopulateUserData(this.activeEmail);
          await this.authenticationState.next(true);
          
        } else {
          console.log('Token Removed from Storage');
          this.storage.remove(this.TOKEN_KEY);
          return this.authenticationState.next(false);
        }
      } else {
        // There is no Token!
        console.log('There was no Token!');
        // Get user email then populate user data
        return this.authenticationState.next(false);
      }
    });
  }
  register() {
  this.http.post(`${this.BACKEND_URL}/api/signup`, this.user).subscribe();
  }
  
  /**
   * Log in to FYF. Will create and set a JWT for Auth, 
   * then pre populate data in all pages
   * @param data - Form Data from LoginComponent 
   * @returns - void
   */
  login(data) {
  console.log('Logging in');
  return this.loginSub = this.http.post(`${this.BACKEND_URL}/api/`,
  { email: data.email,
    password: data.password
  })
    .pipe(
      tap(res => {
        if (!res) {
          console.log('There was no response.');
          return;
        }

        // Set Token
        this.storage.set(this.TOKEN_KEY, res['token']);

        // Get User information from Token
        this.user = this.helper.decodeToken( res['token']);

        // Populate Pages with initial
        this.didPopulateUserData(this.user.email)
      }),
      catchError(e => {
        console.error(e);
        if (e.error.msg === 'The email and password don\'t match.') {
          this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
        } else if (e.error.msg === 'The user does not exist') {
          this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
        } else if (e.message.startsWith('Http failure response')) {
          this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
        }  else {
          this.presentAlert('Email/Password Error', 'Please try again.');
        }
        throw new Error(e);
      })
    )
    // If everything is successfull, set the Auth State to true,
    // which will navigate to Home page (Tabs Module initial route)
    .subscribe( data => {
      this.authenticationState.next(true);
      console.log('Successfully Logged In.');
      console.log(data);
    });
  }

  /**
   * Populate User's Data thoughout multiple Pages of the app
   * Favorite Jobs, Events, and Posts
   * User's Created Posts
   * All Initial Jobs, Events, Posts, and Mentors
   * @param email 
   */
  didPopulateUserData(email) {
    this.populateDataSub = this.http.post(`${this.BACKEND_URL}/api/home/user`, 
    {email: email})
    .subscribe(
      userDetails => {    
        // Get User's Favorite Jobs, Events, Posts.
        // Get User's created Posts
        let usersFavoriteJobs = userDetails['favoriteJobs'];
        let usersFavoriteEvents = userDetails['eventsGoing'];
        let usersFavoritePosts = userDetails['followedPost'];
        // TODO: ---
        let usersCreatedPosts = userDetails['posts']; 
                       

        // Send this info to Jobs, Events, and Posts Service
        this.jobs.favoriteJobs$.next(usersFavoriteJobs);
        this.jobs.activeEmail = this.activeEmail;

        this.events.favoriteEvents$.next(usersFavoriteEvents)
        this.events.activeEmail = this.activeEmail;
        
        this.posts.favoritePosts$.next(usersFavoritePosts)
        this.posts.activeEmail = this.activeEmail;

        this.userProfilePicture = userDetails['profilePicture'];

        // Get initial Jobs, Events, Posts, and Mentors
        this.posts.getPosts();
        this.jobs.getJobs();
        this.events.getEvents();
        this.mentors.getMentors();


    });
  }
  logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      this.user = null;
      this.authenticationState.next(false);
      // window.location.reload();
    });
  }
  forgotPassword(email, newPassword) {
    return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password`, { email, newPassword}).subscribe();
  }
  checkIfUserExits(email) {
    return this.http.post(`${this.BACKEND_URL}/api/forgot-password`, {email})
  }
  sendEmailWithCodeForgotPassword(code, email)  {
    return this.http.post(`${this.BACKEND_URL}/api/forgot-password/email-code`, { code, email } ).subscribe();
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
  


  //  Sign up Functions
  getPersonalInfo(data) {
    console.log('Sent Personal Infoto Auth Service: ');
    this.user.fullName = data.fullName;
    this.user.phone = data.phone;
    this.user.about = data.about;
    this.user.gender = data.gender;
    this.user.dob = data.dob;
    this.user.school = data.school;
    this.user.grade = data.grade;
  }

  getProfilePicture(data) {
    console.log('Sending Profile Picture URL to Auth Service...');
    this.user.profilePicture = data;
    console.log(this.user);
  }

  getResume(data) {
    console.log('data from auth service: ' + data);
    console.log('Sent Resume to Auth Service');
    this.user.resume = data;
    console.log(this.user);
  }

  getLoginCredentials(email, password) {
    console.log('Sent Login Credentials to Auth Service');
    this.user.email = email;
    this.user.password =  password;
    console.log(this.user);

  }

  doesUserExists(email, password) {
    return this.http.post(`${this.BACKEND_URL}/api/signup/does-user-exist`, {email, password});
  }
  cancelSignUp() {
    this.user = null
    this.router.navigateByUrl('');
    this.cancelSignUpToast();
  }
  sendEmailWithCode(code, email)  {
      console.log('almost there');
      return this.http.post(`${this.BACKEND_URL}/api/login-credentials`, { code, email }).subscribe();
  }

  

  // Toasts
  async presentToast() {
    const toast = await this.toast.create({
      message: 'There was an error with your password or email. Please try again.',
      duration: 5000,
      cssClass: 'wrong-password-toast',
      keyboardClose: true,
      position: 'top',

    });
    toast.present();
  }
  async cancelSignUpToast() {
    const toast = await this.toast.create({
      message: 'You have cancelled signing up.',
      duration: 2000,
      cssClass: 'danger-toast',
      keyboardClose: true
    });
    toast.present();
  }
  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }
}
