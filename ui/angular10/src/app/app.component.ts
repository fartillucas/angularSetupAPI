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



  refreshDate() {
    this.service.getDateOfUpdateList().subscribe(data => {
      this.updateList = data;
      console.log(this.updateList);
    })
  }

}

