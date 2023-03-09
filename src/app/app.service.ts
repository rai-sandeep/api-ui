import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
  pageMessageChanged = new Subject<string>();

  constructor() {}

  getPageMessageChanged() {
    return this.pageMessageChanged.asObservable();
  }

  setPageMessage(pageMessage: string) {
    this.pageMessageChanged.next(pageMessage);
  }
}
