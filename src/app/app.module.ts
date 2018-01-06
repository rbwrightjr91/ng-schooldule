import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';


import { NgSchoolduleModule } from '../../ng-schooldule/src/ng-schooldule.module';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSchoolduleModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
