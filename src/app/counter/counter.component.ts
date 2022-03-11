import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit 
{
  counter: number = 0;
  constructor() { }

  increment():void
  {
    this.counter++;
  }

  reset ():void
  {
    this.counter = 0;
  }

  decrement():void
  {
    if(this.counter <= 0)
    {
      this.counter = 0;
    }
    else
    {
      this.counter--;
    }
  }

  ngOnInit(): void {
  }
}
