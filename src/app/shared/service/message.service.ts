import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  /*messages: string[] = [];*/

  private messageSource = new Subject<String>();
   message$ = this.messageSource.asObservable();

  constructor() {
  }


  add(message: string) {
    /*this.messages.push(message);*/
    this.messageSource.next(message);
  }

  /*clear() {
    this.messages = [];
  }*/
}
