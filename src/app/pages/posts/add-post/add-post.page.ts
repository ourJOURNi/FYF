import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PostsService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit, AfterViewInit {

  @ViewChild('postChars', {static: false}) postChars;
  @ViewChild('titleChars', {static: false}) titleChars;
  @ViewChild('hashtagRef', {static: false}) hashtagRef;
  creatorEmail;
  creatorName;
  postValue;
  char;
  hashtags = [];

  textPostForm: UntypedFormGroup;

  // Do some sort of Validation Later
  validationMessages = {};
  creatorProfilePicture: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private posts: PostsService,
    private profile: ProfileService,
    private formBuilder: UntypedFormBuilder,
  ) { }
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.textPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      hashtags: ['', Validators.required],
      post: ['', Validators.required]
    }
    );

    this.profile.getUserDetails().subscribe(
      details => {
        console.log(details);
        this.creatorEmail = details['email'];
        this.creatorName = details['fullName'];
        this.creatorProfilePicture = details['profilePicture'];
      }
    );
  }

  back() {
    this.router.navigate(['/home/posts']);
  }

  async post(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title) {
    await this.presentLoading();
    await this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title).subscribe(
      data => {
        console.log(data);
      }
    );
    await this.router.navigate(['home/posts/add-post/verification']);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Sending post to be Verified...',
      spinner: 'bubbles',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  addHashTag(event) {
    console.log(event);
    let hashtagControl = this.textPostForm.get('hashtags');
    if(event.code === "Enter") {
      console.log('ENTER button pressed.');
      console.log('Value: ');
      console.log(hashtagControl.value);
      console.log('Hashtags: ');
      this.hashtags.push(hashtagControl.value);
      console.log(this.hashtags);

    }

  }

  deleteTag(i) {
    console.log(i);
    let index = this.hashtags.indexOf(i);
    console.log(index);

    if (index = -1) {
      this.hashtags.splice(index, 1);
      console.log(this.hashtags);
    }
  }

}
