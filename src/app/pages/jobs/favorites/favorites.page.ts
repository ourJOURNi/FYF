import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { PlatformLocation } from '@angular/common';
import { Subscription } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
  allFavoriteJobs;
  favoritesLength;
  userEmail;
  skeletonData = true;

  favoriteSubs: Subscription;
  profileSub: Subscription;
  noFavorites: boolean;

  constructor(
    private router: Router,
    private jobs: JobsService,
    private eventEmitterService: FavoritesEventEmitterService,
    private location: PlatformLocation
  ) { 
    this.allFavoriteJobs = this.jobs.favoriteJobs
  }

  ngOnDestroy(): void {
    // this.favoriteSubs.unsubscribe();
    // this.jobs.favoriteJobs$.unsubscribe();
  }

  ngOnInit() {
    this.jobs.favoriteJobs$.subscribe(
      favs => {
        console.log(favs)
        this.favoritesLength = favs

        this.jobs.getFavorites(this.jobs.activeEmail).subscribe(
          favs => {
            this.allFavoriteJobs = favs
            return this.skeletonData = false;
          }
        )
      }
    )
  }

  back() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/jobs']);
  }

  jobPage(job) {
    console.log(job);
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    console.log(job.name);
  }

  favoriteJobPage() {
    console.log('Going to favorite bad');
  }

}
