import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-alarms',
  templateUrl: './show-alarms.component.html',
  styleUrls: ['./show-alarms.component.css']
})
export class ShowAlarmsComponent implements OnInit {

  AlarmList: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshAlaList();

  }
  refreshAlaList() {
    this.service.getAlaList().subscribe(data => {
      this.AlarmList = data;
    })
  }
}


