import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from '../../../services/profile.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { PlatformLocation } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.page.html',
  styleUrls: ['./events-page.page.scss'],
})
export class EventsPagePage implements OnInit, OnDestroy {

  id;
  userEmail;
  going = false;

  eventId;
  eventTitle;
  eventAddressOne;
  eventAddressTwo;
  eventCity;
  eventState;
  eventZip;
  eventDateCreated;
  eventDate;
  eventTime;
  eventDescription;
  eventPhoto;

  eventsSub: Subscription;
  favoritingEventSub: Subscription;
  unFavoritingEventSub: Subscription;
  profileSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private events: EventsService,
    private profile: ProfileService,
    private router: Router,
    private toastController: ToastController,
    private eventEmitterService: EventsEventEmitterService,
    private location: PlatformLocation
    ) { }

  ngOnDestroy(): void {
      // this.eventsSub.unsubscribe();
      this.eventEmitterService.subsVar.unsubscribe();
    }

  ngOnInit() {

    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
    });

    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    // tslint:disable-next-line: radix
    const addressOne  = this.activatedRoute.snapshot.paramMap.get('addressOne');
    // tslint:disable-next-line: radix
    const addressTwo  = this.activatedRoute.snapshot.paramMap.get('addressTwo');
    // tslint:disable-next-line: radix
    const city  = this.activatedRoute.snapshot.paramMap.get('city');
    // tslint:disable-next-line: radix
    const state  = this.activatedRoute.snapshot.paramMap.get('state');
    // tslint:disable-next-line: radix
    const zip  = this.activatedRoute.snapshot.paramMap.get('zip');
    // tslint:disable-next-line: radix
    const date  = this.activatedRoute.snapshot.paramMap.get('date');
    // tslint:disable-next-line: radix
    const dateCreated  = this.activatedRoute.snapshot.paramMap.get('dateCreated');
    // tslint:disable-next-line: radix
    const time  = this.activatedRoute.snapshot.paramMap.get('time');
      // tslint:disable-next-line: radix
    const description  = this.activatedRoute.snapshot.paramMap.get('description');
      // tslint:disable-next-line: radix
    const photo  = this.activatedRoute.snapshot.paramMap.get('photo');
      // tslint:disable-next-line: radix

    this.eventId = id;
    this.eventTitle = title;
    this.eventAddressOne = addressOne;
    this.eventAddressTwo = addressTwo;
    this.eventCity = city;
    this.eventState = state;
    this.eventZip = zip;
    this.eventDateCreated = dateCreated;
    this.eventDate = date;
    this.eventTime = time;
    this.eventDescription = description;
    this.eventPhoto = photo;

    this.profileSub = this.profile.getUserDetails().subscribe(
      details => {

        // Get all the events that the user is going to.

        this.id = details['_id'];
        let favoriteEvents = details['favoriteEvents'];
        console.log(favoriteEvents);

        if (favoriteEvents.includes(this.eventId)) {
          this.going = true;
        } else {
          this.going = false;
        }

        console.log();
      }
    );
  }

  favoritingEvent() {

    this.going = true;
    this.presentGoingToast();
    console.log(`Adding ${this.eventId} to this Users favoriteEvents property`);

    this.favoritingEventSub = this.events.favoriteThisEvent(this.id)
      .subscribe(events => {

        let updatedEvents = [...Object.values(events['favoriteEvents']), this.eventId];
        this.events.favoriteEvents$.next(updatedEvents);
        console.log(this.events.favoriteEvents$.getValue());

        // this.events.getfavoriteEvents(this.id).subscribe(
        //   favoriteEvents => {
        //     console.log(favoriteEvents);
        //   }
        // );
    });
  }

  unFavoritingEvent() {
    this.going = false;
    this.presentNotGoingToast();
    console.log(`Removing ${this.eventId} from this Users favoriteEvents property`);;
    this.unFavoritingEventSub = this.events.unFavoriteThisEvent(this.id).subscribe(
      events => {
        const favoriteEvents = this.events.favoriteEvents$.getValue();

        for (let i = 0; i < favoriteEvents.length; i++) {
          if (favoriteEvents[i] === this.eventId) {
            favoriteEvents.splice(i, 1);
          }
        }
        console.log(favoriteEvents);

        this.events.favoriteEvents$.next(favoriteEvents);
      }
    );
  }

  callEventEmitter() {
    this.eventEmitterService.onBackAction();
  }

  async presentGoingToast() {
    const toast = await this.toastController.create({
      message: 'You are going to this Event. It has been saved to your "Going" list',
      duration: 2000
    });
    toast.present();
  }

  async presentNotGoingToast() {
    const toast = await this.toastController.create({
      message: 'You are no longer going to event. It has been removed from your "Going" list',
      duration: 2000
    });
    toast.present();
  }


}
