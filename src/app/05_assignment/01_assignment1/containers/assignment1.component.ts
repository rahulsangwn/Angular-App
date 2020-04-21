import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  res: any
  onKeyPress(data: string): void {  
    this.res = data
    console.log(data);
  }
}
