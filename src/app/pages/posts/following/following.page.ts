import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { FollowIconComponent } from '../../../components/follow-icon/follow-icon.component';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  commentForm: UntypedFormGroup;
  showShortDesciption = true
  userEmail;
  userFullName;
  userProfilePicture;
  date;
  allFollowedPosts = [];
  userID;

  constructor(
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private formBuilder: UntypedFormBuilder,
    private eventEmitterService: PostPageEmitterService,
    private modal: ModalController,
    private location: PlatformLocation
  ) { }

  ngOnInit() {
    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

    // Get the User's Followed Posts
    this.profile.getUserDetails().subscribe(
      details => {
        console.log('User ID from Following Page OnInit');
        this.userID = details['_id'];
        this.userFullName = details['fullName'];
        this.userEmail = details['email'];
        this.userProfilePicture = details['profilePicture'];
        this.posts.getFollowedPost(this.userID).subscribe(
          data => {
            this.allFollowedPosts = Object.values(data).reverse();
            console.log(data);

            for (const post of this.allFollowedPosts) {
              post.date = format( new Date(post.date), 'MMMM do, yyyy');
            }

            return this.allFollowedPosts;
          }
        );
      });

    console.log('Got Followed Posts');

      // To collect comment data
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }
  alterDescriptionText() {
  this.showShortDesciption = !this.showShortDesciption
  }
  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }
  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }
  back() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/posts']);
  }
  async comment(postID, userFullName, userEmail, userProfilePicture, comment) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      this.userFullName,
      this.userEmail,
      this.userProfilePicture,
      comment
    ).subscribe(
      () => {this.posts.getPostInfo(postID).subscribe(
        post => {
          this.posts.getPostInfo(postID).subscribe(
           post => {
             for (let postComments of post['comments']) {

               console.log(postComments);

               postComments.isUser = false;
               postComments.canDeleteComment = false;
               postComments.canReport = true;

                 // If this comment is from the logged in user, they can delete and edit
               if (postComments.userEmail === this.userEmail) {
                   postComments.isUser = true;
                   postComments.canDeleteComment = true;
                   postComments.canReport = false;
                 }

               postComments.repliesLength = postComments.replies.length;
               postComments.date = formatDistanceToNow( new Date(postComments.date), {
                 includeSeconds: true,
                 addSuffix: false
               });
              }
             this.posts.commentsSubject$.next(post['comments'].reverse());
           });
        });
      }
    );

    await this.posts.getPostInfo(postID).subscribe(
      post => {
        for (let postComments of post['comments']) {
          postComments.date = formatDistanceToNow( new Date(postComments.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }
        this.posts.commentsSubject$.next(post['comments'].reverse());
      }
    );

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());

    await this.router.navigate(['/home/posts/post-page', postID]);
  }
  async doRefresh(event) {

     // Get the User's Followed Posts
     this.profile.getUserDetails().subscribe(
      details => {
        console.log('User ID from Following Page OnInit');
        this.userID = details['_id'];
        this.userFullName = details['fullName'];
        this.userEmail = details['email'];
        this.userProfilePicture = details['profilePicture'];
        this.posts.getFollowedPost(this.userID).subscribe(
          data => {
            this.allFollowedPosts = Object.values(data).reverse();
            console.log(data);

            for (const post of this.allFollowedPosts) {
              post.date = format( new Date(post.date), 'MMMM do, yyyy');
            }

            return this.allFollowedPosts;
          }
        );
      });

    // Present Toast
    await setTimeout(() => {
      const toast = this.toast.create({
        message: 'Inspiration Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }

}
