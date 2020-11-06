import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

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

  ngOnInit(): void {
    this.refreshStaList();

  }
  public openModal(Item, List) {
    this.CustomList = List;
    this.Id = Item;
    //console.log(this.CustomList)
    //console.log(this.Id)


  }

  refreshStaList() {
    this.service.getStaList().subscribe(data => {
      this.StationsList = data;
      //console.log(this.CustomList)
      //console.log(this.StationsList)


    })
  }
  updateDate(k) {
    var day1 = new Date();
    day1.setDate(day1.getDate() + k);
    console.log(k)
    return day1.toISOString().slice(0, 10);
  }
}
