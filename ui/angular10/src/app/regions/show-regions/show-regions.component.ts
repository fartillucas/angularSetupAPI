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

  ngOnInit(): void {
    this.refreshRegList();
  }

  refreshRegList() {
    this.service.getRegList().subscribe(data => {
      this.RegionsList = data;
    })
  }
}
