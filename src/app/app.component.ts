import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NotificationsService } from './services/notifications.service';
import { catchError, tap, switchAll , map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  tabsPlacement = 'bottom';
  tabsLayout = 'icon-top';
  liveData$: any;

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private notifications: NotificationsService,
    private router: Router,
    // private studentChat: StudentChatService,
    // private mentorChat: MentorChatService
  ) {
    this.initializeApp();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.auth.authenticationState.unsubscribe();
  }

  initializeApp() {
    this.auth.checkToken();
    this.notifications.connect();
    this.notifications.messages$
    .pipe(
      // map(rows => rows.data),
      catchError(error => { throw error }),
      tap({
        error: error => console.log('[Live component] Error:', error),
        complete: () => console.log('[Live component] Connection Closed')
      }
      )
    )
    .subscribe(
      (e) => {
        console.log(e)
      });
    Notification.requestPermission((e) => {
      console.log(e);
    });
    let img = '../assets/icons/icon-72x72.svg';
    let text = 'This is a notification.';
    let notification = new Notification('To do list', {body: text, icon: img});
    this.platform.ready().then(() => {
    });
    // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.auth.authenticationState.subscribe(async state => {
      if (state) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
