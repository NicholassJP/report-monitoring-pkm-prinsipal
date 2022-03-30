var options = {
    series: [{
    name: '1 - 15 MAY',
    data: [44, 55, 57, 56, 61]
  }, {
    name: '16-31 MAY',
    data: [76, 85, 101, 98, 87]
  }, {
    name: '1 - 15 JUN',
    data: [5, 12, 43, 21, 27]
  },
  {
    name: '16-28 JUN',
    data: [16, 21, 24, 41, 21]
  },
  {
    name: '1 - 15 JUL',
    data: [11, 14, 21, 11, 15]
  },
  {
    name: '16-31 JUL',
    data: [21, 23, 4, 5, 21]
  },
  {
    name: '1-15 AUG',
    data: [12, 24, 31, 25, 28]
  },
  {
    name: '16-30 AUG',
    data: [42, 11, 15, 18, 29]
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
      show: false,
  },
  grid:{
      show: false,
  },
  fill: {
    opacity: 1
  },
  };

  var chart = new ApexCharts(document.querySelector("#May-Aug-20"), options);
  chart.render();