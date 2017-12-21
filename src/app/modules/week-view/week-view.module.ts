import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { FirestoreService } from './firestore.service';
import { WeekViewComponent } from './week-view.component';


import { environment } from '../../../environments/environment';
import { ClassField } from '@angular/compiler/src/output/output_ast';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [
    WeekViewComponent
  ],
  providers: [
    FirestoreService
  ],
  declarations: [
    WeekViewComponent
  ]
})
export class WeekViewModule { }
