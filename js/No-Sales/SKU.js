var options = {
    colors : ['#395FED', '#FF0000'],
  series: [
    {
      name: "DATA STOCK",
      type: "column",
      data: [500, 600, 700, 500, 300, 700, 600],
    },
    {
      name: "JUMLAH TOKO",
      type: "line",
      data: [600, 700, 800, 600, 500, 800, 700],
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
  yaxis: {
    show: false,
  },
  grid: {
show: false,
},
  dataLabels: {
    enabled: true,
  },
  labels: [
    "Bebelac Gold",
    "Bebelac",
    "Bebelac 3 Vanilla",
    "Bebelac 3 Vanilla",
    "Bebelac 3 Madu",
    "Bebelac 4 Madu",
    "Bebelac 4 Madu",
  ],
  xaxis: {
    type: "String",
    tickAmount: 7,
    
  },
};

var chart = new ApexCharts(document.querySelector("#SKU"), options);
chart.render();