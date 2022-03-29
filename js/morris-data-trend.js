var options = {
    series: [{
    name: '1 - 15 JAN',
    data: [44, 55, 57, 56, 61]
  }, {
    name: '16-31 JAN',
    data: [76, 85, 101, 98, 87]
  }, {
    name: '1 - 15 FEB',
    data: [5, 12, 43, 21, 27]
  },
  {
    name: '16-28 FEB',
    data: [16, 21, 24, 41, 21]
  },
  {
    name: '1 - 15 MAR',
    data: [11, 14, 21, 11, 15]
  },
  {
    name: '16-31 MAR',
    data: [21, 23, 4, 5, 21]
  },
  {
    name: '1-15 APR',
    data: [12, 24, 31, 25, 28]
  },
  {
    name: '16-30 APR',
    data: [42, 11, 15, 18, 29]
  },
  {
    name: '1-15 MAY',
    data: [21, 11, 6, 21, 12]
  },
  {
    name: '16-31 MAY',
    data: [22, 12, 31, 25, 11]
  },
  {
    name: '1-15 JUN',
    data: [5, 8, 12, 42, 11]
  },
  {
    name: '16-30 JUN',
    data: [21, 33, 11, 25, 12]
  },
  {
    name: '1-15 JUL',
    data: [14, 21, 27, 30, 35]
  },
  {
    name: '16-31 JUL',
    data: [12, 21, 24, 22, 15]
  },
  {
    name: '1-15 AUG',
    data: [11, 15, 21, 28, 32]
  },
  {
    name: '16-31 AUG',
    data: [3, 1, 6, 6, 5]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '90%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['High Sales Low Inventory', 'High Sales Proper Inventory', 'Moderate Sales', 'No Sales', 'Total'],
  },
  yaxis: {
      show: true,
  },
  grid:{
      show: false,
  },
  fill: {
    opacity: 1
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();