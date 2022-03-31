var options = {
  colors : ['#50B052', '#A8D08D', '#F8C045', '#F4B083', '#ADB9CA', '#BDD6EE'],
    series: [{
    name: '1 - 15 SEP',
    data: [22, 33, 44, 55, 66]
  }, {
    name: '16-30 SEP',
    data: [5, 12, 43, 21, 27]
  }, {
    name: '1 - 15 OKT',
    data: [16, 21, 24, 41, 21]
  },
  {
    name: '16-31 OKT',
    data: [11, 14, 21, 11, 15]
  },
  {
    name: '1 - 15 NOV',
    data: [76, 85, 101, 98, 87]
  },
  {
    name: '16-30 NOV',
    data: [42, 11, 15, 18, 29]
  },
  {
    name: '1-15 DEC',
    data: [21, 23, 4, 5, 21]
  },
  {
    name: '16-31 DEC',
    data: [12, 24, 31, 25, 28]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  title:{
    text: 'Periode September-December 2020',
    align: 'left',
    style: {
      fontSize:  '20px',
      fontWeight:  '',
      fontFamily:  'Roboto',
      color:  '#263238'
    },
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

  var chart = new ApexCharts(document.querySelector("#Sep-Dec-20"), options);
  chart.render();