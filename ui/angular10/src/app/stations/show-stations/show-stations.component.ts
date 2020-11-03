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

  constructor(private service: SharedService) { }
  station: any;

  ngOnInit(): void {
    this.refreshStaList();

  }
  public openModal(Item, List) {
    this.CustomList = List;
    this.Id = Item;
    console.log(this.CustomList)
    console.log(this.Id)

  }

  refreshStaList() {
    this.service.getStaList().subscribe(data => {
      this.StationsList = data;
    })
  }

}
