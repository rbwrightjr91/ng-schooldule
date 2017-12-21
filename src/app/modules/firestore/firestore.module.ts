import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreComponent } from './firestore.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


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
    FirestoreComponent,
  ],
  declarations: [
    FirestoreComponent,
  ]
})
export class FirestoreModule { }
