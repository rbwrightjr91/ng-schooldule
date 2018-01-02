import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';


import { Class } from './ng-schooldule.module';
import { FirestoreService } from './firestore.service';


@Component({
  selector: 'ng-schooldule',
  templateUrl: './ng-schooldule.component.html',
  styleUrls: ['./ng-schooldule.component.css'],
  providers: [ DatePipe ]
})
export class NgSchoolduleComponent implements OnInit {

  @Input() semester: string;
  @Input() year: string;
  days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
  timeSlots: Date[] = [];
  classes: Class[];
  class: Class;
  initialized = false;

  constructor(private fss: FirestoreService, private datePipe: DatePipe) {
  }

  ngOnInit() {

    this.fss.getClasses().subscribe((data) => this.initialize(data));

  }

  initialize(classes: Class[]) {

    this.classes = classes;

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

    this.initialized = true;

  }

  inSession(time: Date, day: string): boolean {

    let inSession = false;

    for (const c of this.classes) {
      for (const d of c.days){
        if ( d === day && c.start.getHours() <= time.getHours()  && c.end.getHours() >= time.getHours()) {
          inSession = true;
          break;
        }
      }
    }

    return inSession;
  }

  getLinearGradient(index: number, time: Date, day: string) {
    let colorOne: string;
    let colorTwo: string;
    let sizeOne: string;
    let sizeTwo: string;

    for (const c of this.classes){
      for (const d of c.days){
        if (d === day) {
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
    }

    return 'linear-gradient(0deg, ' + colorOne + ' ' + sizeOne + '%' + ', ' + colorTwo + ' ' + sizeTwo + '%)';
  }

  classInfo(time: Date, day: string): string {

    let klass;
    const days: Array<string> = [];


    for (const c of this.classes) {
      for (const d of c.days){
        if ( d === day && c.start.getHours() <= time.getHours()  && c.end.getHours() >= time.getHours()) {
            klass = c;
            break;
        }
      }
    }

    for (const d of klass.days) {
      const temp = ' ' + d.charAt(0).toUpperCase() + d.slice(1);
      days.push(temp);
    }

    return '<b>Class: </b>' + klass.class +
           '<br><b>Title: </b>' + klass.title +
           '<br><b>Days: </b>' + days +
           '<br><b>Time: </b>' + this.datePipe.transform(klass.start, 'h:mma') + ' - ' + this.datePipe.transform(klass.end, 'h:mma') ;

  }

}
