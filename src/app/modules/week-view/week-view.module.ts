import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FirestoreModule } from '../firestore/firestore.module';
import { WeekViewComponent } from './week-view.component';
import { FirestoreComponent } from '../firestore/firestore.component';

@NgModule({
  imports: [
    CommonModule,
    FirestoreModule
  ],
  exports: [
    WeekViewComponent
  ],
  providers: [
    FirestoreComponent
  ],
  declarations: [
    WeekViewComponent
  ]
})
export class WeekViewModule { }
