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

  days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

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

    // get difference in time between earliest start and latest end, with extra hours to pad schedule
    const timeDiffHours = this.latestClass.end.getHours() - this.earliestClass.start.getHours() + 3;

    // create amd return an array with size equal to amount of time slots
    return Array(timeDiffHours).fill(0).map((x, i) => (this.earliestClass.start.getTime() - 3600 * 1000) + (i * 3600 * 1000));
  }

  inSession(time: number, day: string): boolean {

    let inSession = false;

    for (const c of this.classData) {

      if (c.days.includes(day) && c.start.getTime() <= time  && c.end.getTime() >= time) {
        inSession = true;
      }

    }

    return inSession;
  }

  quarter(): boolean {
    return false;
  }

}
