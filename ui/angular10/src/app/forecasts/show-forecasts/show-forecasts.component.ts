import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-forecasts',
  templateUrl: './show-forecasts.component.html',
  styleUrls: ['./show-forecasts.component.css']
})
export class ShowForecastsComponent implements OnInit {
  ForecastList: any = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshForList();
  }

  refreshForList() {
    this.service.getForList().subscribe(data => {
      this.ForecastList = data;
    })
  }
}
