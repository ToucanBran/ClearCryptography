import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithm-preview',
  templateUrl: './algorithm-preview.component.html',
  styleUrls: ['./algorithm-preview.component.scss']
})
export class AlgorithmPreviewComponent implements OnInit {
  @Input() algorithm: string;

  constructor() { }

  ngOnInit() {
  }

}
