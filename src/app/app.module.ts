import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { SafeLinkDirective } from './directives/app-safe-link';
import { AppAuthDirective } from './directives/app-auth';
import { LogDirective } from './directives/log';

@NgModule({
  declarations: [App, SafeLinkDirective, AppAuthDirective],
  bootstrap: [App],
  imports: [BrowserModule, LogDirective],
})
export class AppModule {}
