import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AngularFirestoreModule } from 'angularfire2/firestore';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FirestoreService } from './firestore.service';
import { NgSchoolduleComponent } from './ng-schooldule.component';


import { ClassField } from '@angular/compiler/src/output/output_ast';


@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
  ],
  exports: [
    NgSchoolduleComponent
  ],
  providers: [
    FirestoreService
  ],
  declarations: [
    NgSchoolduleComponent
  ]
})
export class NgSchoolduleModule { }
