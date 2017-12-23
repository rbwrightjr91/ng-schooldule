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

  // classData: Class[];
  earliestClass: Class;
  latestClass: Class;

  earliest: number;
  latest: number;

  numTimeSlots: Array<number>;

  constructor(private fss: FirestoreService) {
  }

  ngOnInit() {

    // this.fss.getClasses().subscribe((data) => this.classData = data);
    this.fss.getEarliest().subscribe((data) => this.earliestClass = data[0]);
    this.fss.getLatest().subscribe((data) => this.latestClass = data[0]);

    /* this.numTimeSlots = Array(Math.ceil(((this.latestClass.start + 100) - (this.earliestClass.start - 100)) / 30))
                            .fill(0).map((x, i) => i); */

  }

  getTimeSlots(): number[] {
    return Array(Math.ceil(((this.latestClass.start + 100) - (this.earliestClass.start - 100)) / 30)).fill(0).map((x, i) => i);
  }
}
