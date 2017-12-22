import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Class } from '../../interfaces/class';
import { FirestoreService } from './firestore.service';


@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  classData: Observable<Class[]>;
  earliestClass: Observable<Class[]>;
  latestClass: Observable<Class[]>;

  constructor(private fss: FirestoreService) {
  }

  ngOnInit() {

    this.classData = this.fss.getClasses();
    this.earliestClass = this.getEarliestClass();
    this.latestClass = this.getLatestClass();

  }

  getEarliestClass(): Observable<Class[]> {
    return this.fss.getEarliest();
  }

  getLatestClass(): Observable<Class[]> {
    return this.fss.getLatest();
  }

}
