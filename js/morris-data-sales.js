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
        lowinven: 40000,
        properinven: 20000,
        sales: 24000,
        nosales: 30000
    }, {
        y: '2021-02',
        lowinven: 30000,
        properinven: 35000,
        sales: 10000,
        nosales: 25000
    },{
        y: '2021-03',
        lowinven: 25000,
        properinven: 28000,
        sales: 15000,
        nosales: 55000
    }, {
        y: '2021-04',
        lowinven: 50000,
        properinven: 50000,
        sales: 29000,
        nosales: 25000
    }, {
        y: '2021-05',
         lowinven: 45000,
        properinven: 24000,
        sales: 35000,
        nosales: 15000
    }, {
        y: '2021-06',
         lowinven: 25000,
        properinven: 25000,
        sales: 24000,
        nosales: 25000
    }, {
        y: '2021-07',
         lowinven: 35000,
        properinven: 50000,
        sales: 55000,
        nosales: 30000
    }, {
        y: '2021-08',
         lowinven: 15000,
        properinven: 18000,
        sales: 20000,
        nosales: 28000
    },
    {
        y: '2021-09',
         lowinven: 25000,
        properinven: 28000,
        sales: 32500,
        nosales: 40000
    },
    {
        y: '2021-10',
         lowinven: 28000,
        properinven: 55000,
        sales: 20000,
        nosales: 17000
    },
    {
        y: '2021-11',
         lowinven: 35000,
        properinven: 25000,
        sales: 30000,
        nosales: 15000
    },
    {
        y: '2021-12',
         lowinven: 44000,
        properinven: 15000,
        sales: 50000,
        nosales: 30000
    },
    {
        y: '2022-01',
         lowinven: 25000,
        properinven: 18000,
        sales: 25000,
        nosales: 40000
    },
    {
        y: '2022-02',
         lowinven: 33000,
        properinven: 25000,
        sales: 14000,
        nosales: 45000
    },
    {
        y: '2022-03',
         lowinven: 25000,
        properinven: 40000,
        sales: 12000,
        nosales: 55000
    },
    {
        y: '2022-04',
         lowinven: 21000,
        properinven: 45000,
        sales: 19000,
        nosales: 30000
    },
    {
        y: '2022-05',
         lowinven: 50000,
        properinven: 25000,
        sales: 18000,
        nosales: 25000
    },
    {
        y: '2022-06',
         lowinven: 35000,
        properinven: 40000,
        sales: 27500,
        nosales: 15000
    },
    {
        y: '2022-07',
         lowinven: 25000,
        properinven: 30000,
        sales: 50000,
        nosales: 25000
    },
    {
        y: '2022-08',
         lowinven: 15000,
        properinven: 50000,
        sales: 15000,
        nosales: 35000
    },
    {
        y: '2022-09',
         lowinven: 22000,
        properinven: 45000,
        sales: 25000,
        nosales: 27500
    },
    {
        y: '2022-10',
         lowinven: 33000,
        properinven: 28000,
        sales: 30000,
        nosales: 50000
    },
    {
        y: '2022-11',
         lowinven: 45000,
        properinven: 25000,
        sales: 40000,
        nosales: 60000
    },
     {
        y: '2022-12',
         lowinven: 10000,
        properinven: 55000,
        sales: 20000,
        nosales: 25000
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
    
});

});    