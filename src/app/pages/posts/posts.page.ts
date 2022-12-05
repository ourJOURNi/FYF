import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IonFabButton, IonSearchbar, ModalController, PopoverController } from '@ionic/angular';
import { PostsService } from '../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { formatDistanceToNow } from 'date-fns';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PostsFilterPopoverComponent } from 'src/app/components/posts-filter-popover/posts-filter-popover.component';
import { FilterPostsService } from 'src/app/emitters/filter-posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':leave', [
          animate('0.8s ease-out', style({ transform: 'translateX(100px)' }))
        ])
      ]
    )
  ]
})
export class PostsPage implements OnInit, OnDestroy {

  @ViewChild(IonFabButton, {static: true}) fabButton: IonFabButton;
  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;
  showShortDesciption = true
  noSearchInput = false;
  searchTerm: any;
  searching = false;
  noPosts = false;
  allPostsLength: any;
  loadedAllPosts: any;
  filtering: boolean;

  postsSub: Subscription;
  notificationsSub: Subscription;
  profileSub: Subscription;
  routerSub: Subscription;

  commentForm: UntypedFormGroup;
  postFilter = 'newest';
  allPosts;
  followedPost;
  followedPostCount;
  myPostsLength;
  userEmail;
  userFullName;
  userProfilePicture;
  date;
  profilePicture;
  notificationsLength: number;

  constructor(
    private router: Router,
    private modal: ModalController,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private loading: LoadingController,
    private formBuilder: UntypedFormBuilder,
    private popoverController: PopoverController,
    private postsEmitterService: PostPageEmitterService,
    private filterPostsService: FilterPostsService,
    private studentChat: StudentChatService,
    private notifications: NotificationsService
  ) {
    this.allPosts = this.posts.allPosts;
  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    this.notificationsSub.unsubscribe();
    this.postsEmitterService.subsVar.unsubscribe();
    this.profileSub.unsubscribe();
    this.routerSub.unsubscribe();
    this.posts.favoritePosts$.unsubscribe();
  }
  ngOnInit() {
    // this.getPosts();
    // this.getUserInfo();
    // this.getFollowingPosts();
    this.trackRoute();
    // To collect comment data
   this.commentForm = this.formBuilder.group({
     comment: ['']
   });

  }

  // Tracks Route Change in Navigator
  // When the user navigates from the main
  // posts page @ /home/posts, the Tab Bar
  // at the bottom of the page will be hidden
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {

        let url = data['url'];
        let tabBar = document.getElementById('tabBar');
        let tabBarFab = document.getElementById('tab-bar-fab');

        if(
          url.includes('/home/posts/post-page/') ||
          url.includes('/home/posts/my-posts/') ||
          url.includes('/home/posts/notifications/') ||
          url.includes('/home/posts/following')
          ) {
  
          tabBar.style.transition = '0.5s'
          tabBar.style.opacity = '0'
          tabBar.style.pointerEvents = 'none';

          tabBarFab.style.transition = '0.5s'
          tabBarFab.style.opacity = '0';
          tabBarFab.style.pointerEvents = 'none';

        } else {

          tabBar.style.transition = '0.5s'
          tabBar.style.opacity = '1'
          tabBar.style.pointerEvents = 'auto';
          
          tabBarFab.style.transition = '0.5s'
          tabBarFab.style.opacity = '1';
          tabBarFab.style.pointerEvents = 'auto';

        }
      });
  }
  alterDescriptionText(post) {
  console.log(post);
  console.log(post.length);
   this.showShortDesciption = !this.showShortDesciption
  }
  async filterMenu() {
    const popover = await this.popoverController.create({
      component: PostsFilterPopoverComponent,
      cssClass: 'my-custom-class',
      // translucent: true,
      showBackdrop: true,
      componentProps: {
        filter: this.postFilter
      }
    });
     await popover.present();
     await popover.onWillDismiss().then((data) => {
       console.log(data);
     }
     );
  }
  search(event) {
    this.searchTerm = event.detail.value.replace(/\s+/g, '')
    ;
    console.log(this.searchTerm);
  }
  searchHashtags(){
    if(this.noPosts) {
      this.allPosts = this.loadedAllPosts;
      this.noPosts = false;
    }
    let searchedPosts = [];
    let searchTermArray = this.searchTerm.split(',');
    console.log('Searching...\n');
    console.log('Search Terms: ')
    console.log(searchTermArray);
    console.log('Loaded Posts')
    console.log(this.loadedAllPosts);

    searchTermArray.forEach(searchedTag => {
      console.log(searchedTag);
      this.allPosts.filter( foundPost => {
        console.log(foundPost.hashtags);
        foundPost.hashtags.forEach(tag => {
          console.log(tag);
          if (tag === searchedTag) {
            // console.log(tag + ' is a match!');
            searchedPosts.push(foundPost)
          }
        });
         if (!this.searchTerm) {
          // console.log('Search term is empty; showing all events instead');
          this.noSearchInput = false;
          this.searching = false;
        }
        this.noSearchInput = true;
      });
    });

    // Get Unique values from searchPosts Object
    this.allPosts = [...new Set(Object.values(searchedPosts))];
    console.log(this.allPosts);
    if(this.allPosts.length === 0) {
      console.log('That search had no results!');
      return this.noPosts = true;
    }
    if(this.allPosts.length > 0) {
      console.log('That search had results!');
      return this.noPosts = false;
    }
    return this.searchBarBlur();
  }
  async searchLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Searching ...',
      duration: 1000
    });
    await loading.present();

    await loading.onDidDismiss().then(() => {
      // this.searching = true;
      this.searchHashtags();
    });
    console.log('Loading dismissed!');
  }
  async searchLoadingEmptySearch() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Refreshing Posts',
      duration: 1000
    });
    await loading.present();

    await loading.onDidDismiss().then(() => {
    });
    console.log('Loading dismissed!');
  }
  searchBarFocus() {
    console.clear()
    console.log('Focusing on Searchbar');
    let searchMessageWrapper = document.getElementById('search-message-wrapper');
    let searchMessageOverlay = document.getElementById('search-message-overlay');
    let searchMessageButton = document.getElementById('search-button');

    searchMessageWrapper.style.transform = 'translateY(36px)';
    searchMessageOverlay.style.opacity = '1';
    searchMessageOverlay.style.display = 'block';
    searchMessageButton.style.background = "red";

    setTimeout(() => {
      let searchBarWrapper = document.getElementById('searchbar-wrapper');
      let fabWrapper = document.getElementById('fab-wrapper');
      let tabBar = document.getElementById('tabBar');
      searchBarWrapper.style.height = '275px';
      // searchBarWrapper.style.background = '#0055a5c7';
      fabWrapper.style.display = 'none';
      tabBar.style.height = '0px';
      tabBar.style.transition = '500ms'
      tabBar.style.transform = 'translateY(40px)';
    }, 0);
  }
  searchBarBlur() {
    console.log('Blurring out of Searchbar');
    let searchMessageWrapper = document.getElementById('search-message-wrapper');
    let searchMessageOverlay = document.getElementById('search-message-overlay');
    let searchMessageButton = document.getElementById('search-button');
    searchMessageWrapper.style.transform = 'translateY(-36px)';
    searchMessageOverlay.style.opacity = '0';
    searchMessageOverlay.style.display = 'none';
    searchMessageButton.style.background = "blue";

    setTimeout(() => {
      let searchBarWrapper = document.getElementById('searchbar-wrapper');
      let fabWrapper = document.getElementById('fab-wrapper');
      let tabBar = document.getElementById('tabBar');
      searchBarWrapper.style.height = '60px';
      searchBarWrapper.style.background = 'none';
      fabWrapper.style.display = 'block';
      tabBar.style.height = '50px';
      tabBar.style.transition = '500ms'
      tabBar.style.transform = 'translateY(0px)';
    }, 0);
  }
  commentFocus() {
    console.log('Blurring out of Comment');

    setTimeout(() => {
      let searchBarWrapper = document.getElementById('searchbar-wrapper');
      let fabWrapper = document.getElementById('fab-wrapper');
      let tabBar = document.getElementById('tabBar');
      searchBarWrapper.style.height = '0px';
      searchBarWrapper.style.background = 'none';
      fabWrapper.style.display = 'none';
    }, 750);
  }
  commentBlur() {
    let searchBarWrapper = document.getElementById('searchbar-wrapper');
    let fabWrapper = document.getElementById('fab-wrapper');
    let tabBar = document.getElementById('tabBar');
    searchBarWrapper.style.height = '60px';
    searchBarWrapper.style.background = 'none';
    fabWrapper.style.display = 'block';

  }
  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }
 

  formatDistanceToNow(date) {
    return formatDistanceToNow( new Date(date), {
      includeSeconds: true,
      addSuffix: true
    });
  }
  doRefresh(event) {


    // Present Toast
    setTimeout(() => {
      const toast = this.toast.create({
        message: 'Inspiration Page has been refreshed',
        duration: 3000
      });
      event.target.complete();
      toast.then(toast => toast.present());
    }, 2000);
  }
 
  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }
  myPosts() {
    console.log('Going to my posts page');
    this.router.navigate(['/home/posts/my-posts', this.userEmail]);
  }
  following() {
    this.router.navigate(['/home/posts/following']);
  }
  chat() {
    this.router.navigate(['/home/posts/student-chat']);
  }
  notificationsPage() {
    this.router.navigate(['/home/posts/notifications']);
  }
  async comment(postID, userFullName, userEmail, userProfilePicture, comment) {

    console.log(postID, userFullName, userEmail, userProfilePicture, comment);

    // Reset Comment Input
    this.commentForm.reset()
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      userFullName,
      userEmail,
      userProfilePicture,
      comment.comment
    ).subscribe(
      newComment => {
         this.postsSub = this.posts.getPostInfo(postID).subscribe(
          post => {
            for (let postComments of post['comments']) {


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

            let postCreator = post['creatorEmail'];
            console.log(newComment);

            // this.userEmail = instigatingUser
            // postCreator = recievingUser
            this.notifications.
            commentNotification(this.userEmail, postCreator, postID, newComment)
          }
        );
      }
    );

    this.postsSub = this.posts.getPostInfo(postID).subscribe(
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
}