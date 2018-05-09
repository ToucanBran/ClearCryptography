import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlgorithmService } from '../../services/algorithm.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  algorithms: Observable<string[]>;
  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit() {
     this.algorithms = this.algorithmService.fetchAlgorithms();
  }
}
