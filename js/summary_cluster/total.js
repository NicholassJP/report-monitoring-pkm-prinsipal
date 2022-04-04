// Dashboard 1 Morris-chart
$( document ).ready(function () {
    "use strict";
        const dynamicWidth = 24 * 50;
        const chartWidth  = dynamicWidth < window.innerWidth ? '100%': dynamicWidth;
        var options = {
            colors : [
              function({value, seriesIndex, dataPointIndex, w}){
                if(dataPointIndex == 0){
                  return '#90C79F'
                } else if (dataPointIndex == 1){
                  return '#5FB391'
                } else if (dataPointIndex == 2){
                  return '#449D84'
                }
                else if (dataPointIndex == 3){
                  return '#3E9073'
                }
                else if (dataPointIndex == 4){
                  return '#476F67'
                }
                else if (dataPointIndex == 5){
                  return '#276045'
                }
                else if (dataPointIndex == 6){
                  return '#76BEB9'
                }
                else if (dataPointIndex == 7){
                  return '#388C9B'
                }
                else if (dataPointIndex == 8){
                  return '#34616F'
                }
                else if (dataPointIndex == 9){
                  return '#384D61'
                }else if (dataPointIndex == 10){
                  return '#1D3552'
                }
                else if (dataPointIndex == 11){
                  return '#899FCA'
                }
                else if (dataPointIndex == 12){
                  return '#ABC2DF'
                }
                else if (dataPointIndex == 13){
                  return '#759FCF'
                }
                else if (dataPointIndex == 14){
                  return '#3D4A92'
                }
                else if (dataPointIndex == 15){
                  return '#1C549F'
                }
                else if (dataPointIndex == 16){
                  return '#37719D'
                }
                else if (dataPointIndex == 17){
                  return '#3885A6'
                }
                else if (dataPointIndex == 18){
                  return '#676EA3'
                }
                else if (dataPointIndex == 19){
                  return '#585898'
                }
                else if (dataPointIndex == 20){
                  return '#A09DCA'
                }else if (dataPointIndex == 21){
                  return '#C3A9CD'
                }else if (dataPointIndex == 22){
                  return '#95579B'
                }else if (dataPointIndex == 23){
                  return '#742779'
                }else{
                  return 'fff'
                }
              }
            ],
          series: [
            {
              type: "column",
              data: [4, 5, 6, 7, 8, 7, 6, 5, 4, 1, 2, 5, 3, 4, 7, 4, 8, 2, 6, 4, 9, 4, 1, 2],
            },
          ],
          chart: {
            height: 350,
            width: chartWidth,
            type: "line",
            toolbar:{
              show : false
          }
          },
            stroke: {
            width: [0, 2],
          },
          grid: {
          show: false,
          },
          labels: [
            "15 JAN",
            "31 JAN",
            "15 FEB",
            "28 FEB",
            "15 MAR",
            "31 MAR",
            "15 APR",
            "30 APR",
            "15 MAY",
            "31 MAY",
            "15 JUN",
            "30 JUN",
            "15 JUL",
            "31 JUL",
            "15 AUG",
            "31 AUG",
            "15 SEP",
            "30 SEP",
            "15 OCT",
            "31 OCT",
            "15 NOV",
            "30 NOV",
            "15 DEC",
            "31 DEC",
          ],
          title:{
            text: 'TREND INDICATOR - PERIODE 2021',
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  'HelveticaNeue',
              color:  '#5A7D8D'
            },
          },
          yaxis:{
            show : false,
          },
          xaxis: {
            type: "String",
            tickAmount: 24,
            tickPlacement: 'between',
          },
        };
    
        var chart = new ApexCharts(document.querySelector("#total"), options);
        chart.render();
  });    