import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  output: number;
  first: number;
  second: number;
  operation = '+';

  constructor() {
  }

  ngOnInit() {
  }

  changeFirst(value) {
    this.first = Number(value);
  }

  changeSecond(value) {
    this.second = Number(value);
  }

  changeOperation(value) {
    this.operation = value;
  }

  calculator() {
    switch (this.operation) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }

  }
}
