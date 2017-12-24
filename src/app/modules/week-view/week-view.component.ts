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

  classData: Class[];
  earliestClass: Class;
  latestClass: Class;

  constructor(private fss: FirestoreService) {
  }

  ngOnInit() {

    this.fss.getClasses().subscribe((data) => this.classData = data);
    this.fss.getEarliest().subscribe((data) => this.earliestClass = data[0]);
    this.fss.getLatest().subscribe((data) => this.latestClass = data[0]);

  }

  getTimeSlots(): number[] {

    // get difference in time between earliest start and latest end in ms
    const timeDiffMs = this.latestClass.end.getTime() - this.earliestClass.start.getTime();

    // convert ms to hours, rounding up, and ad two extra time slots (one slot before earliest class and one slot after latest class)
    const timeDiff = (Math.ceil(timeDiffMs / (3600 * 1000)) + 2);

    // create amd return an array with size equal to amount of time slots
    return Array(timeDiff).fill(0).map((x, i) => i);
  }
}
