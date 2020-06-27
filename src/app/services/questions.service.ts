import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  allElearning(){
    this.http.get(`${environment.apiUrl}/e-learning`);
  }
  getquestions(question){
    this.http.get(`${environment.apiUrl}/questions/{question}`);
  }
}
