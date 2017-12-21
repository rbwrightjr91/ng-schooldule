import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Class } from '../../interfaces/class';
import { FirestoreComponent } from '../firestore/firestore.component';


@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  classData: Observable<Class[]>;

  constructor(private fsc: FirestoreComponent) { }

  ngOnInit() {

    this.classData = this.fsc.getClasses();

  }

}
