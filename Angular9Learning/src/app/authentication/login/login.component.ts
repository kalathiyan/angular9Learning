import { Component, OnInit } from '@angular/core';
import { StorageKeys } from 'src/app/common/constants';
import { StorageService } from 'src/app/common/storage-service';
import { BroadcasterService } from 'src/app/global/application-broadcaster/application-broadcaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private broadcasterService: BroadcasterService,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
  }

  loginToSystem() {
    this.storageService.local.setItem(StorageKeys.Auth, true);
  }

}
