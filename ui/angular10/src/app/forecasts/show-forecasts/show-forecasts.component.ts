import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-forecasts',
  templateUrl: './show-forecasts.component.html',
  styleUrls: ['./show-forecasts.component.css']
})
export class ShowForecastsComponent implements OnInit {


  constructor(private service: SharedService) { }
  ForecastList: any = [];
  k: any = 0;

  updateDate(k) {
    var day1 = new Date();
    day1.setDate(day1.getDate() + k);
    console.log(k)
    return day1.toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.refreshForList();
  }
  refreshForList() {
    this.service.getForList().subscribe(data => {
      this.ForecastList = data;
      console.log(this.ForecastList)
    })
  }
}
