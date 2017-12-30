import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { NgSchoolduleModule } from '@rbwrightjr91/ng-schooldule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSchoolduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
