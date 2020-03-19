import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class BroadcasterService {

    private loginEmmiter = new Subject<boolean>();
    loginObserver: Observable<boolean>;

    constructor() {
        this.loginObserver = this.loginEmmiter.asObservable();
    }

    broadcastLogin(isLoggedIn: boolean) {
        this.loginEmmiter.next(isLoggedIn);
    }
}