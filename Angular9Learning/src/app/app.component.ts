import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from './global/application-broadcaster/application-broadcaster';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Angular9Learning';
  private subscriptions = new Subscription();
  constructor(private broadcasterService: BroadcasterService) {
    this.subscribeBrodcaster();
    this.validateUser();
  }

  validateUser(){

  }


  subscribeBrodcaster() {
    debugger
    this.subscriptions.add(this.broadcasterService.loginObserver.subscribe((isLoggedIn: boolean) => {
      debugger;
    }));
  }

  ngOnDestroy(): void {
    debugger
    this.subscriptions.unsubscribe();
  }
}
