$( document ).ready(function () {
    "use strict";

Morris.Area({
    element: 'morris-area-chart',
    xLabelFormat: function(y){
        var d = new Date(y).toLocaleDateString('en-US', {month : 'short', year:'numeric'});
        return d
    },
    data: [
        {
        y: '2021-01',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-02',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },{
        y: '2021-03',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-04',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-05',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-06',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-07',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }, {
        y: '2021-08',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2021-09',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2021-10',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2021-11',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2021-12',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-01',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-02',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-03',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-04',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-05',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-06',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-07',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-08',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-09',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-10',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
    {
        y: '2022-11',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    },
     {
        y: '2022-12',
        lowinven: 250,
        properinven: 150,
        sales: 200,
        nosales: 500
    }],
    xkey: 'y',
    ykeys: ['lowinven', 'properinven', 'sales', 'nosales'],
    labels: ['High Sales Low Inventory', 'High Sales Proper Inventory', 'Moderate Sales', 'No Sales'],
    pointSize: 4,
    fillOpacity: 0,
    pointStrokeColors:['#55ce63', '#009efb', '#2f3d4a', '#2f3d4a'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 4,
    hideHover: 'auto',
    lineColors: ['#55ce63', '#009efb', '#2f3d4a', '#2f3d4a'],
    resize: true
    
});

});    