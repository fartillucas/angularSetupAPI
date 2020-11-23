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
  GraphListSecondary: any = [];
  labelList: any = [];
  meanTemperature: any = [];
  minTemperature: any = [];
  maxTemperature: any = [];
  humidity: any = [];
  pressure: any = [];
  domesticAlarms: any = [];


  ngOnInit(): void {
    this.refreshGraphList();
  }

  refreshGraphList() {
    this.service.getChartDataSet().subscribe(data => {
      this.GraphList = data;
      for (let data of this.GraphList) { //save labelList to new array
        this.labelList.push(data.Date.toString().split("T00")[0])
      }
      for (let data of this.GraphList) {
        this.domesticAlarms.push(data.SumAlarms)
      }
      this.service.getChartDataSetSecondary().subscribe(data => {
        this.GraphListSecondary = data;
        for (let data of this.GraphListSecondary) {
          this.meanTemperature.push(data.TEMPMEAN)
        }
        for (let data of this.GraphListSecondary) {
          this.minTemperature.push(data.TEMPMIN)
        }
        for (let data of this.GraphListSecondary) {
          this.maxTemperature.push(data.TEMPMAX)
        }
        for (let data of this.GraphListSecondary) {
          this.humidity.push(data.HUMIDITY)
        }
        for (let data of this.GraphListSecondary) {
          this.pressure.push(data.PRESSURE)
        }

      })
    })
  }
  lineChartLabels: Label[] = this.labelList;

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    {
      data: this.minTemperature, label: 'Minimum Temperature',
      yAxisID: 'A'
    },
    {
      data: this.meanTemperature, label: 'Mean Temperature',
      yAxisID: 'A'
    },
    {
      data: this.maxTemperature, label: 'Maximum Temperature',
      yAxisID: 'A'
    },
    {
      data: this.domesticAlarms, label: 'Total Alarms',
      yAxisID: 'B',
      borderDash: [10, 5]
    },
    {
      data: this.pressure, label: 'Pressure at sea',
      yAxisID: 'D'
    },
    {
      data: this.humidity, label: 'Humidity',
      yAxisID: 'C'
    },

  ];

  //Labels shown on the x-axis

  // Define chart options
  lineChartOptions: ChartOptions = {

    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 20
          },
          scaleLabel: {
            display: true,
            labelString: 'temp'
          },
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          ticks: {
            min: 50,
            max: 1000
          },
          scaleLabel: {
            display: true,
            labelString: 'Alarms'
          },
          id: 'B',
          type: 'linear',
          position: 'right',
        },
        {
          ticks: {
            min: 60,
            max: 110
          },
          scaleLabel: {
            display: true,
            labelString: 'Humidity'
          },
          id: 'C',
          type: 'linear',
          position: 'left',
        },
        {
          ticks: {
            min: 900,
            max: 1100
          },
          scaleLabel: {
            display: true,
            labelString: 'Pressure'

          },
          id: 'D',
          type: 'linear',
          position: 'right',
        }
      ],
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
    responsive: true,
    elements: {
      line: {
        fill: false
      }
    }

  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      borderColor: '#984ea3',
    },
    { // dark grey
      borderColor: '#377eb8',
    },
    { // dark grey
      borderColor: '#4daf4a',
    },
    { // dark grey
      borderColor: '#e41a1c',
    },
    { // dark grey
      borderColor: '#ff7f00',
    },
    { // dark grey
      borderColor: '#ffd92f',
    }
  ]


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

