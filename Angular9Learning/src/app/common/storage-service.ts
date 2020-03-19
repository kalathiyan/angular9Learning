import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    local: LocalStorage;
    session: SessionStorage;
    constructor() {
        this.local = new LocalStorage();
        this.session = new SessionStorage();
    }
}


export class LocalStorage implements IStorageService {
    clear(key: any) {
        localStorage.removeItem(key);
    }
    clearAll() {
        if (localStorage.length !== 0) {
            let keys = [];
            for (let key in localStorage){
                keys.push(key);
            } 
            for(let i=0;i<=keys.length;i++){
                localStorage.removeItem(keys[i]);
            }
        }
    }

    setItem(key: string, value: any) {
        if (typeof(value) === 'object' && value !== undefined && value !== null) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    getItem<T>(key: string): T {
        const storageData = localStorage.getItem(key);
        const valueToReturn = JSON.parse(storageData) as T;
        return valueToReturn;
    }
    keyExists(key: string): boolean {

    if (localStorage.length === 0) {
        return false;
    }
    let isExists = false;
    for (let i = 0; i <= localStorage.length; i++) {
        if (localStorage.key(i) === key) {
            isExists = true;
        }
        if (isExists) {
            break;
        }
    }
    return isExists;
    }

    valueExists(key: string): boolean {
        const storageData = localStorage.getItem(key);
        return storageData !== undefined && storageData !== null && storageData.trim() !== '';
    }
}

export class SessionStorage implements IStorageService {
    
    clear(key: any) {
        sessionStorage.removeItem(key);
    }

    clearAll() {
        if (sessionStorage.length !== 0) {
            let keys = [];
            for (const key in sessionStorage) {
                keys.push(key);
            } 
            for (let i = 0; i <= keys.length; i++) {
                sessionStorage.removeItem(keys[i]);
            }
        }
    }

    setItem(key: string, value: any) {
        if (typeof(value) === 'object' && value !== undefined && value !== null) {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value);
    }

    getItem<T>(key: string): T {
        const storageData = sessionStorage.getItem(key);
        const valueToReturn = JSON.parse(storageData) as T;
        return valueToReturn;
    }
    keyExists(key: string): boolean {
        if (sessionStorage.length === 0) {
            return false;
        }
        let isExists = false;
        for (let i = 0; i <= sessionStorage.length; i++) {
            if (sessionStorage.key(i) === key) {
                isExists = true;
            }
            if (isExists) {
                break;
            }
        }
        return isExists;
    }

    valueExists(key: string): boolean {
        const storageData = sessionStorage.getItem(key);
        return storageData !== undefined && storageData !== null && storageData.trim() !== '';
    }

}


export interface IStorageService {
    setItem(key: string, value: any);
    getItem<T>(key: string): T;
    keyExists(key: string): boolean;
    valueExists(key: string): boolean;
    clear(key);
    clearAll();
}
