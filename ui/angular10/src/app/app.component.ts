import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.refreshDate();

  }
  title = 'Weather & Alarm predictor';

  toggle = true;
  status = 'Enable';

  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  constructor(private service: SharedService) { }
  updateList: any = [];
  k = 1;

  yesterday(k) {
    var day1 = new Date();
    day1.setDate(day1.getDate() - k);
    return day1.toISOString().slice(0, 10);
  }



  refreshDate() {
    this.service.getDateOfUpdateList().subscribe(data => {
      this.updateList = data;
      if (this.updateList[0].Date.toString().split("T00:00:00")[0] == this.yesterday(1)) {
        document.getElementById("timeCheck").style.backgroundColor = "#4CAF50";
      } else {
        document.getElementById("timeCheck").style.backgroundColor = "#ff0000";

      }
    })

  }

}

