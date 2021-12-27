import {Component, OnInit} from '@angular/core';
import {Num} from "../model/Num";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  num?: Num;
  form: any = {}
  result?: number;
  constructor() {
  }
  num1?: number;
  num2?: number;

  ngOnInit(): void {
    this.num1 = this.form.number1;
    this.num2 = this.form.number2;
  }

  ngSubmit() {
    // this.num = new Num(
    //   this.form.number1,
    //   this.form.number2
    // )
    this.result = parseInt(this.form.number1)+parseInt(this.form.number2)
  }
}
