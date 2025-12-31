import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmPageLeave($event)',
  },
  standalone: false,
})
export class SafeLinkDirective {
  onConfirmPageLeave(event: MouseEvent) {
    const confirmResult = window.confirm('Do you want to leave the app?');

    if (!confirmResult) event?.preventDefault();

    return;
  }
}
