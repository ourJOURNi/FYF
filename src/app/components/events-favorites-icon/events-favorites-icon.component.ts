import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  favoriteState;
  public iconName = 'heart';
  @Input() event;
  @Input() userEmail;
  @Input() id;
  @Output() favoritedAnimation = new EventEmitter<Object>();
  @Output() unFavoritedAnimation = new EventEmitter<Object>();

  constructor(
    private events: EventsService,
    private toast: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.favoriteState = 'unfavorited';
    for (let favEvent of this.events.favoriteEvents) {
      if (this.event === favEvent) {
        console.log('There was a match!')
        console.log(favEvent)
        this.favoriteState = 'favorited';
      } else {
        this.favoriteState = 'unfavorited';
      }
    }
    return;
  }

  toggleLikeState() {
    if (this.favoriteState === 'unfavorited') {
      this.setFavoriteStateOn()
      return this.events.favoriteThisEvent(this.event);
    }
    else {
      this.setFavoriteStateOff()
      return this.events.unFavoriteThisEvent(this.event);
        }

  }
  setFavoriteStateOn() {
    this.favoriteState = 'favorited';
    this.favoritedAnimation.emit({
      favorited: true,
      msg: `${this.event} was favorited`
      })
 }
  setFavoriteStateOff() {
    this.favoriteState = 'unfavorited';
    this.unFavoritedAnimation.emit({
      favorited: false,
      msg: `${this.event} was unfavorited`
      })
  }FavoriteStateOff() {
    this.favoriteState = 'unfavorited';
  }

  // Toasts
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
