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

  constructor(private fss: FirestoreService) { }

  ngOnInit() {

  }

  getEarliestClassTime() {

    /*

    Make a call to FirestoreService to get earliest class

    */

    // return 1;
  }

}
