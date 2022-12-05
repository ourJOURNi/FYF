import { Component, OnInit, OnDestroy} from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
  userEmail;
  allNotifications;
  noNotifications = false;
  initSub: Subscription;
  notificationsSub: Subscription;

  constructor(
    private notifications: NotificationsService,
    private profile: ProfileService,
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnDestroy() {
    this.notificationsSub.unsubscribe();
  }
  ngOnInit() {
    this.initSub = this.profile.getUserDetails()
      .subscribe(
        userDetails => {
          this.userEmail = userDetails['email'];
        
        }
      );
  }
  clear() {
    this.notifications.clearNotifications(this.userEmail)
    .subscribe(
      data => {

      }
    );
  }
  async clearedToast() {
    const toast = await this.toast.create({
      message: 'Cleared Notifications.',
      cssClass: 'danger-toast',
      duration: 2000
    });
    await toast.present();
  }
  back() {
    this.router.navigateByUrl('home/posts');
  }
  goTo() {
    console.log('Going to page from notification');
  }
  async deleteSwipe(e, notiID) {
    console.log(e)
    if(!e) {
      throw Error('No Swipe Event returned.')
    } else {
      console.log('Delete Swipe ... ');
      await this.deleteNotification(notiID);
      await this.deletedToast();
    }
  }
  deleteNotification(notiID) {
    this.notifications.deleteNotification(this.userEmail, notiID).subscribe(
      data => {
        console.log(data)
        this.allNotifications = Object.values(data);;
        for (let n of this.allNotifications) {
          n.date = formatDistanceToNow( new Date(n.date), {
            includeSeconds: true,
            addSuffix: false
          });
          console.log(this.allNotifications)
        }
        // Track if No Notifications
        // if (this.allNotifications.length <= 0 || this.allNotifications === []) {
        //   this.noNotifications = true;
        // } else {
        //   this.noNotifications = false;
        // }
      });
  }
  async deletedToast() {
    const toast = await this.toast.create({
      message: 'Deleted.',
      cssClass: 'danger-toast',
      duration: 2000
    });
    toast.present();
  }
}
