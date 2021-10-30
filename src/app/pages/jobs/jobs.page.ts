import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { IonSearchbar, LoadingController, PopoverController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { JobsFilterPopoverComponent } from 'src/app/components/jobs-filter-popover/jobs-filter-popover.component';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';


@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage implements OnInit, OnDestroy {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;
  jobsSub: Subscription;
  profileSub: Subscription;
  favoriteJobsSub: Subscription;
  routerSub: Subscription;
  jobFilter = 'newest';
  allJobs;
  allJobsLength;
  jobsGoingLength = 0;
  favoriteJobs;
  favoriteJobsAmount;
  favoriteJobsObj;
  searching = false;
  searchTerm;
  noSearchInput = false;
  loadedAllJobs;
  filtering: boolean;

  // Set this false to enable skeleton
  data = true;

  constructor(
    private router: Router,
    private jobs: JobsService,
    private favorites: FavoritesService,
    private profile: ProfileService,
    private popoverController: PopoverController,
    private favoritesEventEmitterService: FavoritesEventEmitterService,
    private filterJobsService: FilterJobsService,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    if (this.favoritesEventEmitterService.subsVar == undefined) {
      this.favoritesEventEmitterService.subsVar = this.favoritesEventEmitterService.invokeJobsPageRefresh.subscribe(() => {
        return this.getJobs('newest');
      });
    }
    this.filterJobsService.filterBehaviorSub.subscribe(
      data => {
        console.log('Data from Filter Behavior Subject')
        console.log(data);
        this.jobFilter = data;
        this.getJobs(data);
      }
    )
    this.getFavoriteJobs();
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
          let tabBarFab = document.getElementById('tab-bar-fab');
          tabBar.style.height = '0px'
          tabBar.style.transition = '1s'
          tabBarFab.style.transform = 'translateY(100px)'
        }
        else {
          let tabBar = document.getElementById('tabBar');
          let tabBarFab = document.getElementById('tab-bar-fab');
          // console.log(tabBar);
          tabBar.style.height = '50px'
          tabBar.style.transition = '1s'
          tabBarFab.style.transform = 'translateY(0px)'
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
  getFavoriteJobs() {
    console.clear()
    // Get all the user's favorite jobs
    this.profileSub = this.profile.getUserDetails().subscribe(
      data => {
        console.log(data)
        this.favoriteJobs = data['favoriteJobs']
        console.log('Favorite Jobs:');
        console.log(this.favoriteJobs);

        this.favorites.favoriteJobs$.next(this.favoriteJobs);
        this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(
          favs => {
            console.log(`Favorite Jobs in Service: ${favs}`);
            this.favoriteJobsAmount = favs.length;
            this.favorites.getFavorites(data['email']).subscribe( favDetails => {
              this.favoriteJobsObj = favDetails;
            })
          }
        );
      }
    );
  }
  jobPage(job) {
    console.log('Going to specific Job Page:', job.title);
    console.log('The job: ', job);
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyLogo, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
  }
  favoritesPage() {
    this.router.navigate(['/home/jobs/favorites']);
  }
  async doRefresh(job) {

    this.allJobs = [];

    this.getFavoriteJobs();

    this.jobsSub = this.jobs.getJobs().subscribe( jobs => {

      this.allJobs = Object.values(jobs);
      this.allJobsLength = this.allJobs.length;
      this.allJobs.reverse();
      this.searching = false;

      // Format Times
      for (const job of this.allJobs) {
        job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
      }
    });

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
    this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
      console.log('Getting Jobs from JOBS.PAGE.TS');
      if(filter === 'newest') {
        console.log('Newest');
        this.filtering = true;
        this.jobFilter = 'newest';
        this.allJobs = jobs;
        this.allJobsLength = this.allJobs.length;

        // Format Times
        for (const job of this.allJobs) {
          job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
      }}
        if(filter === 'htol')  {
          console.log('High to Low');
          this.filtering = true;
          this.jobFilter = 'htol';
          this.allJobs = jobs;
          this.allJobsLength = this.allJobs.length;

          function sortHighToLow(a, b){
            console.log('Sorting Price')
            return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
          }
          this.allJobs.sort(sortHighToLow);
          this.allJobs.reverse();

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
        }}
        if(filter ==='ltoh') {
          console.log('Low to High');
          this.filtering = true;
          this.jobFilter = 'ltoh';
          this.allJobs = jobs;
          this.allJobsLength = this.allJobs.length;
          function sortLowToHigh(a, b){
            console.log('Sorting Price')
            return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
          }
          this.allJobs.sort(sortLowToHigh);
          this.allJobs.reverse();

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }

        }
        if(filter === 'oldest') {
          console.log('Oldest');
          this.filtering = true;
          this.jobFilter = 'oldest';
          this.allJobs = jobs;
          this.allJobsLength = this.allJobs.length;
          this.jobFilter = 'Oldest'

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }
        }
        return this.allJobs;

    });
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Jobs Page Destroyed!')
    this.favoritesEventEmitterService.subsVar.unsubscribe();
    this.favoriteJobsSub.unsubscribe();
  }

}
