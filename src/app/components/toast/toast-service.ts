import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

export interface ToastMessage {
  title: string;
  content: string;
  delayInMs: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private message = new BehaviorSubject<ToastMessage | null>(null);

  message$ = this.message.asObservable();

  nextMessage(toast: ToastMessage) {
    this.message.next(toast);

    if (toast?.delayInMs) {
      timer(toast.delayInMs).subscribe(() => this.message.next(null));
    }
  }
}
