import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-alarms-region',
  templateUrl: './show-alarms-region.component.html',
  styleUrls: ['./show-alarms-region.component.css']
})
export class ShowAlarmsRegionComponent implements OnInit {

  constructor(private service: SharedService) { }
  AlarmRegionList: any = []
  RegionIdFilter: string = "";
  RegionNameFilter: string = "";
  AlarmRegionListWithOutFilter: any = [];

  ngOnInit(): void {
    this.refreshAlarmRegionList();

  }
  refreshAlarmRegionList() {
    this.service.getAlaRegList().subscribe(data => {
      this.AlarmRegionList = data;
      this.AlarmRegionListWithOutFilter = data;
      console.log(this.AlarmRegionList)
    })
  }
  FilterFn() {
    var RegionIdFilter = this.RegionIdFilter;
    var RegionNameFilter = this.RegionNameFilter;
    console.log(RegionNameFilter)

    this.AlarmRegionList = this.AlarmRegionListWithOutFilter.filter(function (el) {
      return el.Name.toString().toLowerCase().includes(
        RegionNameFilter.toString().trim().toLowerCase()
      ) &&
        el.RegionId.toString().toLowerCase().includes(
          RegionIdFilter.toString().trim().toLowerCase()
        )
    })
  }

}
