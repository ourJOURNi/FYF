import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss'],
  animations: [

    trigger('heart', [
        state('unfavorited', style({
            color: '#999',
            opacity: '1',
            transform: 'scale(0.9)'
        })),
        state('favorited', style({
            color: '#e4405f',
            opacity: '1',
            transform: 'scale(1)'

        })),

        transition('unfavorited <=> favorited', animate('100ms ease-out'))
    ])
  ]
})
export class HeartIconComponent implements OnInit {
  favoriteState;
  public iconName = 'heart';
  @Input() job;
  @Input() favoriteJobs;

  constructor(
    private jobs: JobsService,
  ) { }

  ngOnInit() {
    this.favoriteState = 'unfavorited';
    for (const favJob of this.favoriteJobs) {
      if (this.job === favJob) {
        console.log('There was a match!')
        console.log(favJob)
         this.setFavoriteStateOn();
      } else {
         this.setFavoriteStateOff()
      }
    }
    return;
  }
  toggleLikeState() {
    if (this.favoriteState === 'unfavorited') {
      this.setFavoriteStateOn()
      return this.jobs.favoriteThisJob(this.job);
    }
    else {
      this.setFavoriteStateOff()
      return this.jobs.unFavoriteThisJob(this.job);
    }

  }
  setFavoriteStateOn() {
    this.favoriteState = 'favorited';
    this.iconName = 'heart';

 }
  setFavoriteStateOff() {
    this.favoriteState = 'unfavorited';
    this.iconName = 'heart';
  }

}
