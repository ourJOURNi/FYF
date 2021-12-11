import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class JobsService {
  favoriteJobs$ = new BehaviorSubject([]);
  favoriteJobs = [];
  allJobs = [];
  activeEmail: string;
  BACKEND_URL = environment.url;

  constructor(
    private toast: ToastController,
    private http: HttpClient
  ) {
    this.favoriteJobs$.subscribe(
      data => {
        this.favoriteJobs = data;
      }
    )
  }

  /**
   * Get all Jobs from Database, sorted by the most Recently Posted
   */
  getJobs() {
    console.log('Getting Jobs');
    this.http.get(`${this.BACKEND_URL}/api/jobs`)
      .subscribe(
        jobs => {
          this.allJobs = Object.values(jobs);
          console.log(this.allJobs)
          return this.allJobs;
        }
      );
  }


  getFavorites(email) {
    console.clear()
    console.log(email)
    console.log('Getting Favorites');
    return this.http.post(`${this.BACKEND_URL}/api/jobs/get-favorites`, { email : email });
  }

  favoriteThisJob(job) {
    return this.http.post(`${this.BACKEND_URL}/api/jobs/favorite`, 
    { email : this.activeEmail, _id : job }).subscribe(
      data => {
        console.log("Favorites: ", data);
        this.favoriteJobs$.next(this.favoriteJobs.concat([job]))
        this.presentToastFavorited('You favorited this job!');
      }
    );

  }

  unFavoriteThisJob(job) {
    return this.http.post(`${this.BACKEND_URL}/api/jobs/unfavorite`, 
    { email : this.activeEmail, _id: job}).subscribe(
      data => {
        console.log("Favorites: ", data);
        for (let i = 0; i < this.favoriteJobs.length; i++) {
          if (this.favoriteJobs[i] === job) {
            this.favoriteJobs.splice(i, 1);
          }
        }
        this.favoriteJobs$.next(this.favoriteJobs)
        this.presentToastUnfavorited('You removed this job from Favorites.');
      }
    );
    // update favoriteJobsSubject
    console.log('Unfavoriting this Job');
  }

  async presentToastFavorited(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
      cssClass: 'favorited-toast',
      position: 'bottom'
    });

    toast.present();
  }

  async presentToastUnfavorited(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
      cssClass: 'unfavorited-toast',
      position: 'bottom'
    });

    toast.present();
  }

  sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
    console.log(`Sending email to ${jobCompanyEmail}`);
    return this.http.post(`${this.BACKEND_URL}/api/jobs/send-application`, {user, age, phoneNumber, reason, jobTitle, jobCompanyEmail});
  }
}

