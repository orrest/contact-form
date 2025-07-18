import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgOptimizedImage],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  host: {
    '[class]':
      "'bg-grey-900 p-6 rounded-xl gap-2 w-[327px] md:w-[450px] ' + class",
  },
})
export class Toast {
  class = input('');
  title = input.required<string>();
  content = input.required<string>();
}
