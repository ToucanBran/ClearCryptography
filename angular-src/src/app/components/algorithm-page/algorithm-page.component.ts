import { Component, OnInit } from '@angular/core';
import { Algorithm } from '../../common/algorithm';
import { AlgorithmService } from '../../services/algorithm.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-algorithm-page',
  templateUrl: './algorithm-page.component.html',
  styleUrls: ['./algorithm-page.component.scss']
})
export class AlgorithmPageComponent implements OnInit {
  pageContent: Algorithm;
  constructor(private algorithmService: AlgorithmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.algorithmService.fetchContent(id).subscribe(content => 
        this.pageContent = content);

  }

}
