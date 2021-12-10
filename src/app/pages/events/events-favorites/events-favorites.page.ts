import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from 'src/app/services/profile.service';
import { format, formatDistanceToNow } from 'date-fns';
import { ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-events-favorites',
  templateUrl: './events-favorites.page.html',
  styleUrls: ['./events-favorites.page.scss'],
})
export class EventsFavoritesPage implements OnInit {
  profileSub: Subscription;
  favoriteEventsSub: Subscription;
  cancelSub: Subscription;
  favoriteEventsLength;
  favoriteEvents = [];
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    private cdr: ChangeDetectorRef,
    private toast: ToastController,
    private alert: AlertController,
    private eventEmitterService: EventsEventEmitterService,
    private location: PlatformLocation
    ) { }
  ngOnInit() {
    this.getFavoriteEvents()
    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

    // Get the User's details
    this.profileSub = this.profile.getUserDetails().subscribe(
     details => {
       this.id = details['_id'];
       this.userEmail = details['email'];
       this.favoriteEventsSub = this.events.favoriteEvents$.subscribe(
         events => {
           console.clear()
           console.log('Events: ')
           console.log(events)
          this.favoriteEvents = events;
          this.favoriteEventsLength = events.length;
          return;
         });

       console.log('getting event user ' + this.id + ' is going to');
     });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

  goBack() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/events']);
  }

  getFavoriteEvents() {
    this.favoriteEventsSub = this.events.getEventsFavorites(this.id).subscribe( eventsGoing => {
        this.favoriteEvents = Object.values(eventsGoing);
        this.favoriteEvents.reverse();
        console.log(`Updated events going list: ${this.favoriteEvents}`);

        for (const event of this.favoriteEvents) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
          event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
            includeSeconds: true,
            addSuffix: true
          });
        }

        this.eventEmitterService.resetEvents();
      });
  }

  refreshFavoriteEvents() {
    this.favoriteEventsSub = this.events.getEventsFavorites(this.id).subscribe( eventsGoing => {
        this.favoriteEvents = Object.values(eventsGoing);
        this.favoriteEvents.reverse();
        console.log(`Updated events going list: ${this.favoriteEvents}`);

        for (const event of this.favoriteEvents) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
          event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
            includeSeconds: true,
            addSuffix: true
          });
        }

        this.eventEmitterService.resetEvents();
      });
  }

  async presentNotGoingToast() {
    const toast = await this.toast.create({
      message: 'You are no longer going to event. It has been removed from your "Going" list',
      duration: 2000
    });
    toast.present();
  }

}
