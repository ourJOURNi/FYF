import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

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
    private alert: AlertController,
  ) {
    this.userProfilePicture = this.auth.userProfilePicture;
  }

  ngOnInit() {

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
