import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FirestoreService } from './firestore.service';
import { NgSchoolduleComponent } from './ng-schooldule.component';


import { environment } from '../../src/environments/environment';
import { ClassField } from '@angular/compiler/src/output/output_ast';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
