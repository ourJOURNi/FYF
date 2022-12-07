import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { IonSearchbar, LoadingController, PopoverController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { JobsFilterPopoverComponent } from 'src/app/components/jobs-filter-popover/jobs-filter-popover.component';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage implements OnInit, OnDestroy {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;
  jobsSub: Subscription;
  routerSub: Subscription;
  jobFilter = 'newest';
  allJobs;
  allJobsLength;

  favoriteJobs;
  favoriteJobsAmount;
  // What a user taps on a heart icon to favorite/unfavorite a job,
  // this will trigger an animation event on the Favorites counter
  // in the header toolbar. 
  favorited = false;
  unFavorited = false;
  searching = false;
  searchTerm;
  noSearchInput = false;
  loadedAllJobs;
  filtering: boolean;

  // Set this false to enable skeleton
  data = true;
  favoriteJobsSub$: Subscription;

  constructor(
    private router: Router,
    private jobs: JobsService,
    private popoverController: PopoverController,
    private favoritesEventEmitterService: FavoritesEventEmitterService,
    private filterJobsService: FilterJobsService,
    public loading: LoadingController
  ) {
    this.allJobs = this.jobs.allJobs;
    this.favoriteJobsSub$ = this.jobs.favoriteJobs$.subscribe(
      jobs => {
        this.favoriteJobs = jobs
        this.favoriteJobsAmount = jobs.length
        console.log('\nFavorite Jobs with Favorites:')
        console.log(this.favoriteJobs)
        console.log(this.favoriteJobsAmount)
      }
    )
  }

  ngOnInit() {
    this.filterJobsService.filterBehaviorSub.subscribe(
      data => {
        this.jobFilter = 'newest';
      }
    )
    this.trackRoute();
    // Refresh Favorites after one has been deleted from the favoites page.
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = true;
    }, 1500);
  }
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {
        // console.log(data['url']);
        let url = data['url'];
        if(url.includes('/home/jobs/job-page/')) {
          console.log('Hide Tab Bar!');
          let tabBar = document.getElementById('tabBar');
          let proPic = document.getElementById('pro-pic-fab-btn');
          tabBar.style.height = '0px'
          tabBar.style.transition = '0.1s'
          proPic.style.height = '0px'
          proPic.style.transition = '0.1s'
        }
        else {
          let tabBar = document.getElementById('tabBar');
          let proPic = document.getElementById('pro-pic-fab-btn');
          tabBar.style.height = '56px'
          tabBar.style.transition = '0.1s'
          proPic.style.height = '56px'
          proPic.style.transition = '0.1s'
        }
      });
  }
  async filterMenu() {
    const popover = await this.popoverController.create({
      component: JobsFilterPopoverComponent,
      cssClass: 'my-custom-class',
      // translucent: true,
      showBackdrop: true,
      componentProps: {
        filter: this.jobFilter
      }
    });
     await popover.present();
  }
  jobPage(job) {
    console.log('Going to specific Job Page:', job.title);
    console.log('The job: ', job);
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyLogo, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
  }

  // Favorites
  /**
   * Scales the Heart Icon to appear to be pop out when the user favorites a job
   * @param e event value passed
   */

  

  favoriteAnimation(e) {
    console.clear()
    console.log(e)
    let headerToolbarFavoriteIconWrapper = document.getElementById('favorites-page-button');
    headerToolbarFavoriteIconWrapper.style.transition = '0.3s';
    headerToolbarFavoriteIconWrapper.style.transitionTimingFunction = 'ease-in';
    headerToolbarFavoriteIconWrapper.animate([
      { transform: 'scale(0.85)'},
      { transform: 'scale(1.15)'},
      { transform: 'scale(1)'},
    ], {
      duration: 1000,
    })
    
  }
  unFavoriteAnimation(e) {
    console.clear()
    console.log(e)
    // SVG Wrapper Scales
    let headerToolbarFavoriteIconWrapper = document.getElementById('favorites-page-button');
    headerToolbarFavoriteIconWrapper.style.transition = '0.3s';
    headerToolbarFavoriteIconWrapper.style.transitionTimingFunction = 'ease-in';
    headerToolbarFavoriteIconWrapper.animate([
      { transform: 'scale(1)'},
      { transform: 'scale(0.8)'},
      { transform: 'scale(1)'},
    ], {
      duration: 1000,
    })

    // Heart turns gray when something is unfavorited
    let headerToolbarFavoriteIcon = document.getElementById('heart-path');
    headerToolbarFavoriteIcon.style.transitionTimingFunction = 'ease';
    headerToolbarFavoriteIcon.animate([
        {fill: 'url(#linearGradient-135)'},
    ], {
      duration: 1000,
    })
  }
  favoritesPage() {
    this.router.navigate(['/home/jobs/favorites']);
  }



  async doRefresh(job) {

    this.allJobs = [];


    // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {

    //   this.allJobs = Object.values(jobs);
    //   this.allJobsLength = this.allJobs.length;
    //   this.allJobs.reverse();
    //   this.searching = false;

    //   // Format Times
    //   for (const job of this.allJobs) {
    //     job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
    //   }
    // });

    setTimeout(() => {
      job.target.complete();
      console.log('jobs Refreshed');
    }, 2000);

    await this.searchbar.getInputElement().then(  (searchbarInputElement) => {
      searchbarInputElement.value = '';
      this.noSearchInput = false;
    });

    await console.log('Refreshing jobs Page..');
  }
  async getJobs(filter) {
    // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
    //   console.log('Getting Jobs from JOBS.PAGE.TS');
    //   if(filter === 'newest') {
    //     console.log('Newest');
    //     this.filtering = true;
    //     this.jobFilter = 'newest';
    //     this.allJobs = jobs;
    //     this.allJobsLength = this.allJobs.length;

    //     // Format Times
    //     for (const job of this.allJobs) {
    //       job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
    //   }}
    //     if(filter === 'htol')  {
    //       console.log('High to Low');
    //       this.filtering = true;
    //       this.jobFilter = 'htol';
    //       this.allJobs = jobs;
    //       this.allJobsLength = this.allJobs.length;

    //       function sortHighToLow(a, b){
    //         console.log('Sorting Price')
    //         return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
    //       }
    //       this.allJobs.sort(sortHighToLow);
    //       this.allJobs.reverse();

    //       // Format Times
    //       for (const job of this.allJobs) {
    //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
    //     }}
    //     if(filter ==='ltoh') {
    //       console.log('Low to High');
    //       this.filtering = true;
    //       this.jobFilter = 'ltoh';
    //       this.allJobs = jobs;
    //       this.allJobsLength = this.allJobs.length;
    //       function sortLowToHigh(a, b){
    //         console.log('Sorting Price')
    //         return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
    //       }
    //       this.allJobs.sort(sortLowToHigh);
    //       this.allJobs.reverse();

    //       // Format Times
    //       for (const job of this.allJobs) {
    //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
    //       }

    //     }
    //     if(filter === 'oldest') {
    //       console.log('Oldest');
    //       this.filtering = true;
    //       this.jobFilter = 'oldest';
    //       this.allJobs = jobs;
    //       this.allJobsLength = this.allJobs.length;
    //       this.jobFilter = 'Oldest'

    //       // Format Times
    //       for (const job of this.allJobs) {
    //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
    //       }
    //     }
    //     return this.allJobs;

    // });
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Jobs Page Destroyed!')
  }

}
