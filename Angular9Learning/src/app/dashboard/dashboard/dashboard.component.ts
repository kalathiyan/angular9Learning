import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from 'src/app/global/application-broadcaster/application-broadcaster';
import { StorageService } from 'src/app/common/storage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private broadcasterService: BroadcasterService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.storageService.local.clearAll();
    this.broadcasterService.broadcastLogin(false);
  }
}
