import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from './global/application-broadcaster/application-broadcaster';
import { Subscription } from 'rxjs';
import { StorageService } from './common/storage-service';
import { StorageKeys, RoutingKeys } from './common/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Angular9Learning';
  isLoggedIn = false;
  constructor(
    private broadcasterService: BroadcasterService,
    private storageService: StorageService,
    private router: Router) {
    this.subscribeBrodcaster();
    this.validateUser();
  }

  validateUser() {
    if (!this.storageService.local.keyExists(StorageKeys.Auth)) {
      this.router.navigate([RoutingKeys.Login]);
    } else {
      this.isLoggedIn = true;
      this.router.navigate([RoutingKeys.Dashboard]);
    }
  }

  subscribeBrodcaster() {
    this.broadcasterService.loginObserver.subscribe((isLoggedIn: boolean) => {
      this.validateUser();
    });
  }

  ngOnDestroy(): void {
  }
}
