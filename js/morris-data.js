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
        xkey: 'y',
        ykeys: ['a'],
        labels: ['A'],
        barColors:['#6E5FC4'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });

 });    