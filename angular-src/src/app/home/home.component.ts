import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  algorithms:string[] = [];
  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 8; i++)
      this.algorithms.push('x');
  }

}
