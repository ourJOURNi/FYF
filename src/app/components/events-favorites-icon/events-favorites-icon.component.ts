import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { FavoriteJobsService } from 'src/app/services/favorite-jobs.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';



@Component({
  selector: 'app-events-favorites-icon',
  templateUrl: './events-favorites-icon.component.html',
  styleUrls: ['./events-favorites-icon.component.scss'],
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
export class EventsFavoritesIconComponent implements OnInit {
  favorite = false;
  favoriteState = 'not-favorite';
  public iconName = 'heart';
  @Input() event;
  @Input() favoriteEvents;
  @Input() userEmail;
  @Input() id;

  constructor(
    private events: EventsService,
    private eventsEventEmitterService: EventsEventEmitterService,
    private toast: ToastController,
    private router: Router,
    private profile: ProfileService) { }

  ngOnInit() {
    console.log('Favorite Events');
    console.log(this.favoriteEvents);

    if (this.favoriteEvents.includes(this.event._id)) {
      this.favorite = true;
      this.favoriteState = 'favorited';
    } else {
      this.favorite = false;
      this.favoriteState = 'unfavorited';
    }


    this.favoriteState = 'unfavorited';
    for (const favEvent of this.favoriteEvents) {
      if (this.event._id === favEvent['_id']) {
        console.log('There was a match!')
        return this.setFavoriteStateOn();
      }
    }
  }

  toggleLikeState() {
    if (this.favoriteState === 'unfavorited') {
      this.setFavoriteStateOn()
      return;
      // return this.favorites.favoriteThisJob(this.job);
    }
    else {
      this.setFavoriteStateOff()
      return;
      // return this.favorites.unFavoriteThisJob(this.job);
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

  togglefavoriteState(event) {

    if (this.favoriteState === 'not-favorite') {

      // favorite
      this.favoriteState = 'favorite';
      this.iconName = 'close-circle-outline';
      this.favorite = true;
      this.favoriteToast();
      console.log(`favorite to event, ${event.title}`);


      this.events.favoritingEvent(event._id, this.userEmail, this.id).subscribe(events => {

        let updatedEvents = [...Object.values(events['eventsfavorite']), this.event._id];
        this.events.favoriteEvents$.next(updatedEvents);
        console.log(this.events.favoriteEvents$.getValue());

      });


    } else {

      // Not favorite
      this.favoriteState = 'not-favorite';
      this.iconName = 'add-circle-outline';
      this.favorite = false;
      this.notfavoriteToast();
      console.log('No longer favorite to Event');
      this.events.unFavoritingEvent(event._id, this.userEmail, this.id).subscribe(events => {
        const eventsfavorite = this.events.favoriteEvents$.getValue();

        for (let i = 0; i < eventsfavorite.length; i++) {
          if (eventsfavorite[i] === this.event._id) {
            eventsfavorite.splice(i, 1);
          }
        }
        console.log(eventsfavorite);

        this.events.favoriteEvents$.next(eventsfavorite);

      });

    }

  }

  async favoriteToast() {
    const toast = await this.toast.create({
      message: 'You are favorite to this event.',
      duration: 2000
    });
    toast.present();
  }

  async notfavoriteToast() {
    const toast = await this.toast.create({
      message: 'You are no longer favorite to this event.',
      duration: 2000
    });
    toast.present();
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

}
