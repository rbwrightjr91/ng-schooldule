import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Observable } from 'rxjs/Observable';


import { Class } from '../../interfaces/class';
import { FirestoreService } from './firestore.service';


@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  classData: Class[];
  earliestClass: Class;
  latestClass: Class;

  numTimeSlots: Array<Date>;

  constructor(private fss: FirestoreService) {
  }

  ngOnInit() {

    this.fss.getClasses().subscribe((data) => this.classData = data);
    this.fss.getEarliest().subscribe((data) => this.earliestClass = data[0]);
    this.fss.getLatest().subscribe((data) => this.latestClass = data[0]);

  }

  getTimeSlots(): number[] {

    const timeDiffMs = this.latestClass.end.getTime() - this.earliestClass.start.getTime();

    const timeDiff = Math.ceil(timeDiffMs / (3600 * 1000));

    return Array(timeDiff).fill(0).map((x, i) => i);
  }
}
