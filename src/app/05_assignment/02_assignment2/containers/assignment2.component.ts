import { Component } from '@angular/core';
import {AssignmentComponent} from 'src/app/05_assignment/assignment.component'

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component {
  data: any
  constructor() {
    this.data = new AssignmentComponent().todos
  }
  
  selectedItem: any
  enableActive(event, val) {
    this.selectedItem = val;
  }

}
