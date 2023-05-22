import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public chart: any = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  timeLine = [
    { subtitle:"titutlo1", title: '2019', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'},
    { subtitle:null  , title: '2018', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.' },
    { subtitle:"titutlo3", title: '2017', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'},
    { subtitle:"titutlo4", title: '2016', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'},
    { subtitle:"titutlo5", title: '2015', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.' },
    { subtitle:"titutlo5", title: '2015', detail: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.' },
    
  ];

  createChart(): void{

    let languajes:any = ["JAVA", "PHP", "HTML/CSS/JS", "Codeigniter 4", "Angular", "MySQL"];

    let data: any = {
      labels: languajes,
      datasets:[{
        axis: 'y',
        // label: 'My first Dataset',
        data: [45, 70, 85, 63, 30, 86],
        fill: false,
        // label: false,
        
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(124, 133, 178, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(173, 102, 255, 0.2)',
        ],
        borderColor:[
          'rgb(255, 159, 64)',
          '#7377ad',
          'rgb(255, 99, 132)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 3
      }]
    }



    console.log("createChart");
    this.chart = new Chart('skillsCharts', {
      type: 'bar', //this denotes tha type of chart

      data,
      options: {
        plugins:{
          legend:{
            display: false
          },
          tooltip:{
            enabled: true,
            callbacks: {
              label: function(context: any) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += " "+context.parsed.y + ' %';
                }
                return label;
              }
            }
          }
        }
      }

    });
  }

  

}
