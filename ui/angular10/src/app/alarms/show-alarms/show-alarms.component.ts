import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-alarms',
  templateUrl: './show-alarms.component.html',
  styleUrls: ['./show-alarms.component.css']
})
export class ShowAlarmsComponent implements OnInit {

  constructor(private service: SharedService) { }
  AlarmList: any = []

  ngOnInit(): void {
    this.refreshAlaList();
  }
  refreshAlaList() {
    this.service.getAlaList().subscribe(data => {
      this.AlarmList = data;
      console.log(this.AlarmList)

    })
  }

}
