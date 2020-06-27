import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy  {
eventSetting;
date;
time;
speaker;
agenda: any[];
unsubscribe : Subscription;
  constructor(private http: HttpClient) {
      this.unsubscribe=this.http.get<any>(`${environment.apiUrl}/setting`).subscribe(res =>{
        this.eventSetting = res;
        this.date = res.setting.date;
        this.time = res.setting.time;
        this.speaker = res.setting.speaker;
        this.agenda = res.agenda;
      });
   }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.unsubscribe.unsubscribe();
  }
}
