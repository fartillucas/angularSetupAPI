import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-alarms-station',
  templateUrl: './show-alarms-station.component.html',
  styleUrls: ['./show-alarms-station.component.css']
})
export class ShowAlarmsStationComponent implements OnInit {

  constructor(private service: SharedService) { }
  AlarmStationList: any = []
  StationIdFilter: string = "";
  StationNameFilter: string = "";
  AlarmStationListWithOutFilter: any = [];

  ngOnInit(): void {
    this.refreshAlarmStationList();
  }

  refreshAlarmStationList() {
    this.service.getAlaStaList().subscribe(data => {
      this.AlarmStationList = data;
      this.AlarmStationListWithOutFilter = data;
      console.log(this.AlarmStationList);
    })
  }
  FilterFn() {
    var StationIdFilter = this.StationIdFilter;
    var StationNameFilter = this.StationNameFilter;
    console.log(StationNameFilter)

    this.AlarmStationList = this.AlarmStationListWithOutFilter.filter(function (el) {
      return el.Name.toString().toLowerCase().includes(
        StationNameFilter.toString().trim().toLowerCase()
      ) &&
        el.StationId.toString().toLowerCase().includes(
          StationIdFilter.toString().trim().toLowerCase()
        )
    })
  }
}
