import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  favoriteEvents$ = new BehaviorSubject([]);
  allEvents = [];
  activeEmail: string;
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
  ) {}

  getEvents() {
    console.log('Getting Events');
    this.http.get(`${this.BACKEND_URL}/api/events`)
    .subscribe(
      events => {
        this.allEvents = Object.values(events);
        console.log(this.allEvents)
        return this.allEvents;
      }
    );
  }

  getEventsFavorites(id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, {_id: id});
  }

  favoritingEvent(eventID, userEmail, id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { eventID, userEmail, id });
  }

  unFavoritingEvent(eventID, userEmail, id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`,  {
      userEmail,
      eventID,
      id});
  }

  deleteEvent(eventId) {
    return this.http.post(`${this.BACKEND_URL}/api/events/delete-event`, {_id: eventId});
  }

}

