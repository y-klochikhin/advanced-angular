import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  template: `
  Push Notifications
  <button (click)="subscribe()">Subscribe</button>
  <button (click)="unsubscribe()">Unsubscribe</button>
  `,
  styles: []
})
export class AppComponent {
  constructor(private swPush: SwPush) {
    this.listenNotifications();
    //this.listenSubscriptions();
  }

  public subscribe() {
    const serverPublicKey = 'BFtbzvCEW9sZResG-kdyDrgW_0ZmtD-ymmkLftUvLZfjRzFJ7Y-LHgrorA5ayBqUqVnu0svWG5y11GXlJVP87YU';
    this.swPush.requestSubscription({serverPublicKey})
        .then(pushSubscription => console.log('pushSubscription', pushSubscription.toJSON()))
        .catch(error => console.log('subscribe error', error));
  }

  public unsubscribe() {
    this.swPush.unsubscribe().catch(error => console.log('unsubscribe error', error));
  }

  private listenNotifications() {
    this.swPush.messages.subscribe(message => {
      console.log('message', message);
    });

    this.swPush.notificationClicks.subscribe(({action, notification}) => {
      console.log('action', action, notification);

      if (action === 'apply') {
        console.log('npm i angular');
      }

      if (action === 'cancel') {
        console.log('rm -rf /');
      }
    });
  }

  private listenSubscriptions() {
    this.swPush.subscription.subscribe(subscription => {
      console.log('subscription', subscription);
    })
  }
}
