import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { FavoriteJobsService } from 'src/app/services/favorite-jobs.service';
import { JobsService } from 'src/app/services/jobs.service';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.page.html',
  styleUrls: ['./job-page.page.scss'],
})
export class JobPagePage implements OnInit, OnDestroy {

  jobObj: string;
  jobId: string;
  jobTitle: string;
  jobCompanyName: string;
  jobCompanyEmail: string;
  jobSummary: string;
  jobFullJobDescription: string;
  jobRateOfPay: string;
  jobDatePosted: string;
  favoriteJobsObj;
  jobLogo: string;

  profileSub: Subscription;
  favoriteJobsSub: Subscription;
  jobsSub: Subscription;
  favoritesSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private profile: ProfileService,
    private favorites: FavoriteJobsService,
    private jobs: JobsService,
    private eventEmitterService: FavoritesEventEmitterService,
    private location: PlatformLocation
  ) { }
  ngOnDestroy(): void {
    this.profileSub.unsubscribe();
    this.favoriteJobsSub.unsubscribe();
    this.favoritesSub.unsubscribe();
    this.jobsSub.unsubscribe();
  }
  ngOnInit() {

    this.location.onPopState(() => {
      this.triggerJobPageRefresh();
    });

    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    // tslint:disable-next-line: radix
    const companyLogo  = this.activatedRoute.snapshot.paramMap.get('companyLogo');
    // tslint:disable-next-line: radix
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
    // tslint:disable-next-line: radix
    const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');
     // tslint:disable-next-line: radix
    const summary  = this.activatedRoute.snapshot.paramMap.get('summary');
     // tslint:disable-next-line: radix
    const fullJobDescription  = this.activatedRoute.snapshot.paramMap.get('fullJobDescription');
      // tslint:disable-next-line: radix
    const rateOfPay  = this.activatedRoute.snapshot.paramMap.get('rateOfPay');

    this.jobId = id;
    this.jobTitle = title;
    this.jobLogo = companyLogo;
    // this.jobPosted = posted;
    this.jobCompanyName = companyName;
    this.jobCompanyEmail = companyEmail;
    this.jobSummary = summary;
    this.jobFullJobDescription = fullJobDescription;
    this.jobRateOfPay = rateOfPay;
    // this.getFavoriteJobs();
  }

  // getFavoriteJobs() {
  //   // getting all the favorite jobs that the user has on their profile
  //   this.profileSub = this.profile.getUserDetails().subscribe(
  //     data => {
  //       let favoriteJobs = data['favoriteJobs']

  //       this.favorites.favoriteJobs$.next(favoriteJobs);
  //       this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(
  //         favs => {
  //           console.log(`Favorite Jobs in Service: ${favs}`);
  //           // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
  //           //   for (const job of Object.values(jobs)) {
  //           //     if (this.jobId == job._id) {
  //           //       this.jobObj = job;
  //           //     }
  //           //   }
  //           // });
  //           this.favoritesSub = this.favorites.getFavorites(data['email']).subscribe( favDetails => {
  //             this.favoriteJobsObj = favDetails;
  //           });
  //         }
  //       );
  //     }
  //   );
  // }

  applyForJob() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail, this.jobLogo, this.jobRateOfPay ]);
  }

  favoriteThisJob() {
    console.log('Favoriting this Job');
    // Check for error before we present the toast
    this.presentToast();
  }

  goBack() {
    this.triggerJobPageRefresh();
    this.router.navigate(['/home/jobs']);
  }

  triggerJobPageRefresh() {
    this.eventEmitterService.onBackAction();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This job has been favorited.',
      duration: 2000
    });
    toast.present();
  }



}
