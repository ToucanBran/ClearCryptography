import { Component, Input, OnInit } from '@angular/core';
import { Algorithm } from '../../common/algorithm';

@Component({
  selector: 'app-algorithm-preview',
  templateUrl: './algorithm-preview.component.html',
  styleUrls: ['./algorithm-preview.component.scss']
})
export class AlgorithmPreviewComponent implements OnInit {
  @Input() algorithm: Algorithm;

  constructor() { }

  ngOnInit() {
    console.log(this.algorithm);
  }

}
