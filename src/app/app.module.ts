import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { SafeLinkDirective } from './directives/app-safe-link';

@NgModule({
  declarations: [App, SafeLinkDirective],
  bootstrap: [App],
  imports: [BrowserModule],
})
export class AppModule {}
