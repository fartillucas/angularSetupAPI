import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-stations',
  templateUrl: './show-stations.component.html',
  styleUrls: ['./show-stations.component.css']
})



export class ShowStationsComponent implements OnInit {
  StationsList: any = [];
  ForecastList: any = [];
  Item: any = [];
  ModalList: any = [];
  CustomList: any = [];
  Id: any = 0;
  k: any = 1;

  constructor(private service: SharedService) { }


  StationNameFilter: string = "";
  StationRegionFilter: string = "";
  StationIdFilter: string = "";
  StationsListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshStaList();

  }
  public openModal(Item, List) {
    this.CustomList = List;
    this.Id = Item;

  }

  refreshStaList() {
    this.service.getStaList().subscribe(data => {
      this.StationsList = data;
      this.StationsListWithoutFilter = data;
      console.log(this.StationsList)


    })
  }
  updateDate(k) {
    var day1 = new Date();
    day1.setDate(day1.getDate() + k);
    console.log(k)
    return day1.toISOString().slice(0, 10);
  }

  FilterFn() {
    var StationNameFilter = this.StationNameFilter;
    var StationRegionFilter = this.StationRegionFilter;
    var StationIdFilter = this.StationIdFilter;
    console.log(StationNameFilter)

    this.StationsList = this.StationsListWithoutFilter.filter(function (el) {
      return el.Name.toString().toLowerCase().includes(
        StationNameFilter.toString().trim().toLowerCase()
      ) &&
        el.RegionId.toString().toLowerCase().includes(
          StationRegionFilter.toString().trim().toLowerCase()
        ) &&
        el.Id.toString().toLowerCase().includes(
          StationIdFilter.toString().trim().toLowerCase()
        )

    })
  }
}
