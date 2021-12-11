import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';import { catchError, tap, switchAll, retryWhen, delayWhen } from 'rxjs/operators';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import { BehaviorSubject} from 'rxjs';
import {WebSocketSubject, webSocket} from 'rxjs/webSocket';
// export const WS_ENDPOINT = environment.wsEndpoint;


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$ = new BehaviorSubject([]);
  notifications = [];
  activeEmail: string;
  BACKEND_URL = environment.url;
  allNotifications: unknown[];


  constructor(
    private http: HttpClient) { }

  getNotifications(email) {
      console.log('Getting Notifications');
      console.log(email);
      return this.http.post(`${this.BACKEND_URL}/api/notifications`, {email: email})
        .subscribe(
          notifications => {
            this.allNotifications = Object.values(notifications);
            console.log(this.allNotifications)
            return this.allNotifications;
          }
        );
  }
  clearNotifications(email) {
    console.log('Clearing Notifications');
    console.log(email);
    return this.http.post(`${this.BACKEND_URL}/api/notifications/clear-notifications`, {email: email});
  }
  deleteNotification(email, notiID) {
    console.log('Attemtpting to delete notification');
    return this.http.post(`${this.BACKEND_URL}/api/notifications/delete-notification`, {email, notiID});
  }
  commentNotification(instigatingUser, recievingUser, postID, commentID) {
    console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/notifications/comment-on-post-notification`, {instigatingUser, recievingUser, postID, commentID}).subscribe((n) => {
      console.log(n);
      this.sendMessageWS(n)
    });
  }
  replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
    console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/notifications/reply-on-comment-notification`, {instigatingUser, recievingUser, postID, commentID, replyID});

  }

  // WebSocket
  public socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe(
    switchAll(),
    catchError(e => { throw e }));

  // public connect(cfg: { reconnect: boolean } = { reconnect: false }): void {
  //   console.log('Attempting to connect to WebSocket.');
  //   console.log(cfg);
  //   if (!this.socket$ || this.socket$.closed) {
  //     this.socket$ = this.getNewWebSocket();
  //     this.socket$.subscribe(
  //       (socket) => {
  //         console.log(socket)
  //       });
  //     const messages = this.socket$.pipe(cfg.reconnect ? this.reconnect : o => o,
  //       tap({
  //         error: error => console.log(error),
  //       }), catchError(_ => EMPTY))
  //     this.messagesSubject$.next(messages);
  //   }
  // }
  // private getNewWebSocket() {
  //   console.log('Creating new WebSocket');
  //   return webSocket({
  //     url: WS_ENDPOINT,
  //     serializer: msg => JSON.stringify({roles: "admin,user", msg: msg}),
  //     deserializer: ({data}) => data,
  //     closeObserver: {
  //       next: () => {
  //         console.log('Service: connection closed');
  //         this.socket$ = undefined;
  //         this.connect({ reconnect: true });
  //       }
  //     }
  //   });
  // }
  private reconnect(observable: Observable<any>): Observable<any> {
    return observable.pipe(retryWhen(errors => errors.pipe(tap(val => console.log('[Data Service] Try to reconnect', val)),
      delayWhen(_ => timer(2000))))); }
  sendMessageWS(notifications) {
    console.log('Sending Message to WebSocket')
    console.log(notifications)
    this.socket$.next(notifications);
  }
  close() {
    this.socket$.complete();
  }
}
