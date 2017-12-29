import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Class } from '../../interfaces/class';
import { FirestoreService } from './firestore.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'ng-schooldule',
  templateUrl: './ng-schooldule.component.html',
  styleUrls: ['./ng-schooldule.component.css']
})
export class NgSchoolduleComponent implements OnInit {

  days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
  timeSlots: Date[] = [];
  classData: Class[];

  constructor(private fss: FirestoreService) {
  }

  ngOnInit() {

    this.fss.getClasses().subscribe((data) => this.getTimeSlots(data));

  }

  getTimeSlots(classes: Class[]): Date[] {

    this.classData = classes;

    let temp = classes[0];

    for (let i = 0; i < classes.length; i++) {
      if (temp.end.getTime() < classes[i].end.getTime()) {
        temp = classes[i];
      }
    }

    const earliest = classes[0];
    const latest = temp;

    // get difference in time between earliest start and latest end, with extra hours to pad schedule
    const timeDiffHours = latest.end.getHours() - earliest.start.getHours() + 3;

    // create amd return an array with size equal to amount of time slots
    this.timeSlots = Array(timeDiffHours).fill(0).map((x, i) => new Date(
      new Date().setTime(earliest.start.getTime() - (3600 * 1000) + (i * 3600 * 1000))
    ));

    return this.timeSlots;
  }

  inSession(time: Date, day: string): boolean {

    let inSession = false;

    for (const c of this.classData) {

      if (c.days.includes(day) && c.start.getHours() <= time.getHours()  && c.end.getHours() >= time.getHours()) {
          inSession = true;
        }

      }

    return inSession;
  }

  getLinearGradient(index: number, time: Date, day: string) {
    let colorOne: string;
    let colorTwo: string;
    let sizeOne: string;
    let sizeTwo: string;

    for (const c of this.classData){

      if (c.days.includes(day)) {

        if (c.start.getHours() === time.getHours() && c.start.getMinutes() !== 0) {

          if (index % 2 === 0) {
            colorOne = '#007bff';
            colorTwo = '#f2f2f2';
          }else {
            colorOne = '#ffffff';
            colorTwo = '#007bff';
          }

          sizeOne = ((1 - (c.start.getMinutes() / 60)) * 100).toString();
          sizeTwo = '0';

        }else if (c.end.getHours() === time.getHours() && c.end.getMinutes() !== 0) {

          index++;

          if (index % 2 === 0) {
            colorOne = '#ffffff';
            colorTwo = '#007bff';
          }else {
            colorOne = '#f2f2f2';
            colorTwo = '#007bff';
          }

          sizeOne = ((1 - (c.end.getMinutes() / 60)) * 100).toString();
          sizeTwo = '0';

        }

      }

    }

    return 'linear-gradient(0deg, ' + colorOne + ' ' + sizeOne + '%' + ', ' + colorTwo + ' ' + sizeTwo + '%)';
  }

  classInfo(time: Date, day: string): String {

    let classInfo: Class;

    for (const c of this.classData) {

      if (c.days.includes(day) && c.start.getHours() <= time.getHours()  && c.end.getHours() >= time.getHours()) {
          classInfo = c;
        }

      }

    return classInfo.class;

  }

}
