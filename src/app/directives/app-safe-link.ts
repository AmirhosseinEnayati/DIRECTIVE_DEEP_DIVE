import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmPageLeave($event)',
  },
  standalone: false,
})
export class SafeLinkDirective {
  queryString = input('defaultValue', { alias: 'appSafeLink' });
  onConfirmPageLeave(event: MouseEvent) {
    const confirmResult = window.confirm('Do you want to leave the app?');

    if (!confirmResult) event?.preventDefault();

    (event.target as HTMLAnchorElement).href += '?from=' + this.queryString();

    return;
  }
}
