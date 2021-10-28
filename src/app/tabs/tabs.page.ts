import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  profilePicture;
  infoSub: Subscription;
  userProfilePicture: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertController,
    private location: Location,
    private profile: ProfileService
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this.infoSub = this.profile.getUserDetails().subscribe( details => {
      // console.log(details);
      this.userProfilePicture = details['profilePicture'];
      console.log(this.userProfilePicture);
    });
  }
  async logoutConfirm() {
    const alert = await this.alert.create({
      header: 'Are you sure you want to log out?',
      cssClass: 'danger-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Logout',
          handler: () => {
            this.auth.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  toProfile() {
    let tabBarFab = document.getElementById('tab-bar-fab');
    tabBarFab.classList.remove("pro-pic-animation")
    tabBarFab.offsetWidth
    tabBarFab.classList.add("pro-pic-animation")
    return;
    // this.router.navigateByUrl('/profile');
  }
}
