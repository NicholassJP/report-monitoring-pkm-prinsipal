$( document ).ready(function () {
    "use strict";

    var line = new Morris.Line({
        element: 'morris-line-chart',
        xLabelFormat: function(y){
            var d = new Date(y).toLocaleDateString('en-US', {month : 'short', year:'numeric'});
            return d
        },
        data: [
          {y: '2021-01', item1: 1},
          {y: '2021-02', item1: 2},
          {y: '2021-03', item1: 3},
          {y: '2021-04', item1: 4},
          {y: '2021-05', item1: 5},
          {y: '2021-06', item1: 5},
          {y: '2021-07', item1: 9},
          {y: '2021-08', item1: 3},
          {y: '2021-09', item1: 2},
          {y: '2021-10', item1: 1},
          {y: '2021-11', item1: 1},
          {y: '2021-12', item1: 1}
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: '#eef0f2',
        lineColors: ['#009efb'],
        lineWidth: 1,
        hideHover: 'auto'
      });
});    