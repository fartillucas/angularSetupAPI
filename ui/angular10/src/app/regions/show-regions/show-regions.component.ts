import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-regions',
  templateUrl: './show-regions.component.html',
  styleUrls: ['./show-regions.component.css']
})
export class ShowRegionsComponent implements OnInit {

  constructor(private service: SharedService) { }

  RegionsList: any = [];
  Item: any = [];
  ModalList: any = [];
  CustomList: any = [];
  Id: any = 0;
  k: any = 1;

  ngOnInit(): void {
    this.refreshRegList();
  }
  public openModal(Item, List) {
    this.CustomList = List;
    this.Id = Item;

    //console.log(this.CustomList)
    //console.log(this.Id)
    console.log(this.CustomList)


  }
  updateDate(k) {
    var day1 = new Date();
    day1.setDate(day1.getDate() + k);
    console.log(k)
    return day1.toISOString().slice(0, 10);
  }

  refreshRegList() {
    this.service.getRegList().subscribe(data => {
      this.RegionsList = data;
      console.log(this.RegionsList)


    })
  }
}
