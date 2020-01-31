import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { format, formatDistanceToNow } from 'date-fns';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventsGoing;
  eventsGoingLength = 0;
  allEvents;
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    private toast: ToastController
    ) { }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {

       this.id = details['_id'];
       this.userEmail = details['email'];

       this.events.eventsGoing$.next(details['eventsGoing']);
       this.events.eventsGoing$.subscribe(
         events => {
           this.eventsGoingLength = Object.values(events).length;
         }
       );
       console.log('User id: ' + this.id);
       console.log('User email: ' + this.userEmail);
     });

    this.events.getEvents().subscribe( events => {
      this.allEvents = Object.values(events);
      this.allEvents.reverse();

      for (const event of this.allEvents) {
        event.date = format( new Date(event.date), 'MMMM-dd-yyyy');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
        event.time = format( new Date(event.date), 'hh:mm a');
      }
    });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

  going() {
    this.router.navigate(['/home/events/going']);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.events.getEvents().subscribe( events => {
      this.allEvents = Object.values(events);
      this.allEvents.reverse();

      for (const event of this.allEvents) {
        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
        event.time = format( new Date(event.date), 'hh:mm a');
      }
    });
    setTimeout(() => {
      event.target.complete();
      console.log('Events Refreshed');
    }, 2000);
  }

}
