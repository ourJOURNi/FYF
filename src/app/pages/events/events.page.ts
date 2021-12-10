import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EventsService } from '../../services/events.service';
import { format, formatDistanceToNow } from 'date-fns';
import {IonSearchbar, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { isAfter } from 'date-fns';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  eventsSub: Subscription;
  profileSub: Subscription;
  favoriteEventsSub: Subscription;
  deleteEventSub: Subscription;
  routerSub: Subscription;
  jobFilter = 'newest';
  favoriteEvents;
  favoriteEventsLength;
  searching = false;
  noSearchInput = false;
  searchTerm;
  allEvents;
  allEventsLength;
  loadedAllEvents;
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    public loading: LoadingController,
    private eventEmitterService: EventsEventEmitterService
    ) { 
      this.allEvents = this.events.allEvents;
      this.favoriteEventsSub = this.events.favoriteEvents$.subscribe(
        events => {
          console.log('Favorite Events')
          console.log(events)
          return;
        }
      )
    }
  ngOnInit() {
    this.getProfileDetails();
    this.getFavoriteEvents();
    this.deleteEvent();
    this.trackRoute();
    this.eventEmitterSubscription();
    this.filterEvents();
  }
  filterEvents() {
    // this.filterJobsService.filterBehaviorSub.subscribe(
    //   data => {
    //     console.log('Data from Filter Behavior Subject')
    //     console.log(data);
    //     this.jobFilter = data;
    //     this.getJobs(data);
    //   }
    // )
    // this.getFavoriteJobs();
    // this.trackRoute();
  }
  eventEmitterSubscription() {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(() => {
        this.getEvents();
      });
    }
    
  }
  getProfileDetails() {
    // Get the User's details
    this.profileSub = this.profile.getUserDetails().subscribe( details => {

      this.id = details['_id'];
      this.userEmail = details['email'];

      this.events.favoriteEvents$.next(details['favoriteEvents']);

      this.favoriteEventsSub = this.events.favoriteEvents$.subscribe(
        events => {
          // console.log(events.length);
          // this.favoriteEventsLength = events.length;
        }
      );
      console.log('User id: ' + this.id);
      console.log('User email: ' + this.userEmail);
    });
    
  }

  // Searches user by ID in Database

  getFavoriteEvents() {
    this.favoriteEvents = this.events.getEventsFavorites(this.id).subscribe( favoriteEvents => {
      console.clear()
      console.log('Getting Favorite Events')
      console.log(favoriteEvents)
      return favoriteEvents;
    });
  }

  // Tracks Route Change in Navigator
  // When the user navigates from the main
  // profile page @ /home/events, the Tab Bar
  // at the bottom of the page will be hidden
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {

        let url = data['url'];
        let tabBar = document.getElementById('tabBar');
        let tabBarFab = document.getElementById('tab-bar-fab');

        console.log('\nURL: ')
        console.log(url)

        if(url.includes('/home/events/events-page') ||
           url.includes('/home/events/events-favorites')        ) 
           {
  
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
  deleteEvent() {
    var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
    console.log(result);

  }
  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }
  favoritesPage() {
    this.router.navigate(['/home/events/events-favorites']);
  }
  filter($event) {

    this.initializeItems();
    let searchTerm = $event.detail.value;

    this.presentLoadingWithOptions();

    this.allEvents = this.allEvents.filter( currentEvents => {
      console.log(currentEvents);

      if (!currentEvents || !searchTerm  ) {

        console.log('No results from that search');
        this.noSearchInput = true;

      }

      if ( currentEvents.title && searchTerm) {

        if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {

          console.log(currentEvents.title);
          console.log((currentEvents));

          this.searchTerm = searchTerm;

          this.searching = true;
          this.noSearchInput = false;

          return true;
        }
        return false;
      }

      this.noSearchInput = true;

  });


    this.allEventsLength = this.allEvents.length;

    // If there are no matches with the searchTerm
    if ( this.allEventsLength === 0 ) {

      console.log('No results from that search');
      this.searching = true;
      this.searchTerm = searchTerm;

      this.searchbar.getInputElement().then(  (searchbarInputElement) => {
        searchbarInputElement.value = '';
      });
      this.noSearchInput = true;
    }

    if (!searchTerm) {
      console.log('Search term is empty; showing all events instead');
      this.noSearchInput = false;
      this.searching = false;
      this.getEvents();
    }
  }
  initializeItems(): void {
    this.allEvents = this.loadedAllEvents;
  }
  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for Events...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      keyboardClose: false
    });
    return await loading.present();
  }
  async doRefresh(event) {

    this.allEvents = [];
    // this.eventsSub = this.events.getEvents().subscribe( events => {

    //   this.allEvents = Object.values(events);
    //   this.allEventsLength = this.allEvents.length;
    //   this.allEvents.reverse();
    //   this.searching = false;

    //   // Format Times
    //   for (const event of this.allEvents) {
    //     // First date Event Date
    //     // Second date Current Date

    //     // If the Current Date is After the Event Date, Delete
    //     // If True, Delete event.

    //     if (isAfter(new Date(Date.now()), new Date(event.date))) {
    //       this.deleteEventSub = this.events.deleteEvent(event._id).subscribe();
    //     }
    //     event.date = format( new Date(event.date), 'MMMM dd, yyyy');
    //     event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
    //       includeSeconds: true,
    //       addSuffix: true
    //     });
    //     event.time = format( new Date(event.date), 'hh:mm a');
    //   }
    // });

    setTimeout(() => {
      event.target.complete();
      console.log('Events Refreshed');
    }, 2000);

    await console.log('Refreshing Events Page..');
  }
  async getEvents() {
    // this.eventsSub = this.events.getEvents().subscribe( events => {

    //   this.allEvents = Object.values(events);
    //   this.allEventsLength = this.allEvents.length;
    //   this.allEvents.reverse();
    //   this.searching = false;

    //   // Format Times
    //   for (const event of this.allEvents) {
    //     event.date = format( new Date(event.date), 'MMMM dd, yyyy');
    //     event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
    //       includeSeconds: true,
    //       addSuffix: true
    //     });
    //     event.time = format( new Date(event.date), 'hh:mm a');
    //   }
    // });
  }
}
