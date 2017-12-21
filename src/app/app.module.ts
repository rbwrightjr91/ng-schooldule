import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { WeekViewModule } from './modules/week-view/week-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeekViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
