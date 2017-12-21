import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Class } from '../../interfaces/class';


@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})

export class FirestoreComponent implements OnInit {

  classCollection: AngularFirestoreCollection<Class>;
  classes: Observable<Class[]>;

  constructor(private afs: AngularFirestore) {

    this.classCollection = this.afs.collection<Class>('Class');
    this.classes = this.classCollection.valueChanges();

  }

  ngOnInit() {
  }

  public getClasses(): Observable<Class[]>{
    return this.classes;
  }

}
