import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';


import { Class } from '../../interfaces/class';

@Injectable()
export class FirestoreService {

  classCollection: AngularFirestoreCollection<Class>;
  classes: Observable<Class[]>;

  constructor(private afs: AngularFirestore) {

    this.classCollection = this.afs.collection<Class>('Class');
    this.classes = this.classCollection.valueChanges();

  }

  public getEarliest(): Observable<Class[]> {
    const earliest$ = new Subject<Class[]>();
    return earliest$.switchMap( earliest =>
      this.afs.collection<Class>('Class', ref => ref.orderBy('start', 'asc').limit(1)).valueChanges()
    );
  }

}