// Dashboard 1 Morris-chart
$( document ).ready(function () {
    "use strict";

        var options = {
            colors : ['#ED7D39'],
          series: [
            {
              type: "column",
              data: [1, 6, 7, 5, 3, 7, 6, 5, 6, 7, 5, 3, 7, 6, 5, 6, 7, 5, 3, 7, 6, 5, 6],
            },
          ],
          chart: {
            height: 350,
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
          xaxis: {
            type: "String",
            tickAmount: 24,
            tickPlacement: 'between',
          },
        };
    
        var chart = new ApexCharts(document.querySelector("#trend-bar-perfomance"), options);
        chart.render();
 });    