import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';


import { Class } from './ng-schooldule.module';

@Injectable()
export class FirestoreService {

  classCollection: AngularFirestoreCollection<Class>;
  classes: Observable<Class[]>;

  constructor(private afs: AngularFirestore) {

    this.classCollection = this.afs.collection<Class>('Class', ref => ref.orderBy('start', 'asc'));
    this.classes = this.classCollection.valueChanges();
  }

  getClasses(): Observable<Class[]> {
    return this.classes;
  }

}
