import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BroadcasterService } from 'src/app/global/application-broadcaster/application-broadcaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private broadcasterService: BroadcasterService,
    private localStorage: LocalStorage) {
  }

  ngOnInit(): void {
  }

  loginToSystem() {
    debugger
    let m = this.localStorage.setItem('auth', true).subscribe((msg) => {
      debugger
     let data = this.localStorage.getItem('auth').subscribe((val) => {
        debugger
      })
    }, (err) => {
      debugger
    });
  }

}
