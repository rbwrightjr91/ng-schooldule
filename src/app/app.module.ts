import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { NgSchoolduleModule } from './modules/ng-schooldule/ng-schooldule.module';


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
