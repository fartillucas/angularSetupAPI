import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Console } from 'console';

@Component({
  selector: 'app-show-stations',
  templateUrl: './show-stations.component.html',
  styleUrls: ['./show-stations.component.css']
})
export class ShowStationsComponent implements OnInit {
  StationsList: any = [];
  Item: any = [];
  CustomList: any[];


  constructor(private service: SharedService) { }
  station: any;

  ngOnInit(): void {
    this.refreshStaList();
  }
  contactInfo(id) {
    this.service.getStaList()
  }

  public openModal(Item) {
    this.CustomList = Item;
  }

  refreshStaList() {
    this.service.getStaList().subscribe(data => {
      this.StationsList = data;
    })
  }

}
