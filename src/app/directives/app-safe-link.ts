import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmPageLeave($event)',
  },
  standalone: false,
})
export class SafeLinkDirective {
  queryString = input('defaultValue', { alias: 'appSafeLink' });
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmPageLeave(event: MouseEvent) {
    const confirmResult = window.confirm('Do you want to leave the app?');

    if (!confirmResult) event?.preventDefault();

    this.hostElement.nativeElement.href += '?from=' + this.queryString();

    return;
  }
}
