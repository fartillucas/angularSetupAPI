import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css']
})
export class ShowGraphComponent implements OnInit {

  constructor(private service: SharedService) {

  }
  GraphList: any = [];
  new_data: any = [];


  ngOnInit(): void {
    this.refreshGraphList();
    console.log(this.GraphList)
  }

  refreshGraphList() {
    this.service.getChartDataSet().subscribe(data => {
      this.GraphList = data;
      for (let data of this.GraphList) {
        this.new_data.push(data.Date.toString().split("T00")[0])
      }
      console.log(this.new_data);
    })
  }
  lineChartLabels: Label[] = this.new_data;

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  //Labels shown on the x-axis

  // Define chart options
  lineChartOptions: ChartOptions = {

    scales: {
      xAxes: [{
        ticks: {
          fontStyle: "Bolder",
          fontSize: 14,
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90
        }
      }]
    },
    responsive: false,

  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}

