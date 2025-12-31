import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule],
})
export class AppModule {}
