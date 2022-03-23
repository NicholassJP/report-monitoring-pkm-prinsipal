// Dashboard 1 Morris-chart
$( document ).ready(function () {
    "use strict";

// Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart-2',
        data: [{
            y: 'High Sales Low Inventory',
            a: 6,
            b: 5,
            c: 4,
            d: 4.5,
            e: 2,
            f: 5,
        }, {
            y: 'High Sales Proper Inventory',
            a: 6,
            b: 5,
            c: 4,
            d: 4.5,
            e: 2,
            f: 5,
        }, {
            y: 'Moderate Sales',
            a: 6,
            b: 5,
            c: 4,
            d: 4.5,
            e: 2,
            f: 5,
        }, {
            y: 'No Sales',
            a: 6,
            b: 5,
            c: 4,
            d: 4.5,
            e: 2,
            f: 5,
        }, {
            y: 'TOTAL',
            a: 6,
            b: 5,
            c: 4,
            d: 4.5,
            e: 2,
            f: 5,
        }],
        grid: false,
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd', 'e', 'f'],
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        barColors:['#50B052', '#A8D08D', '#F8C045', '#F4B083', '#ADB9CA', '#BDD6EE'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2'
    });

 });    