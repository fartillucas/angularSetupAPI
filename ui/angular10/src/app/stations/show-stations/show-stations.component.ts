import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-stations',
  templateUrl: './show-stations.component.html',
  styleUrls: ['./show-stations.component.css']
})
export class ShowStationsComponent implements OnInit {
  StationsList: any = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshStaList();
  }
  refreshStaList() {
    this.service.getStaList().subscribe(data => {
      this.StationsList = data;
    })
  }
}
