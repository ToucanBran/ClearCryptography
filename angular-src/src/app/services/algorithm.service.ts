import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Algorithm } from '../common/algorithm';
import 'rxjs/add/operator/map'
const API_URL = environment.apiUrl;
@Injectable()
export class AlgorithmService {
  
  constructor(private http: HttpClient) { }

  fetchAlgorithms(): Observable<Algorithm[]>{
    return this.http.get<Algorithm>(API_URL + '/api/algorithms').map(res => res['algorithms'] as Algorithm[] || []);
  }
}
