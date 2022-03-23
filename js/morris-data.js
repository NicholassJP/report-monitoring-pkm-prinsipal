// Dashboard 1 Morris-chart
$( document ).ready(function () {
    "use strict";

// Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart-1',
        data: [{
            y: 'Jan',
            a: 5,
        }, {
            y: 'Feb',
            a: 6,
        }, {
            y: 'Mar',
            a: 7,
        }, {
            y: 'Apr',
            a: 5,
        }, {
            y: 'May',
            a: 3,
        }, {
            y: 'Jun',
            a: 8,
        }],
        grid: false,
        xkey: 'y',
        ykeys: ['a'],
        labels: ['B'],
        barColors:['#ED7D39'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
    });

 });    