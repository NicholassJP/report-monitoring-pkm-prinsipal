var options = {
    colors : ['#9D8834', '#FF0000'],
  series: [
    {
      name: "DATA STOCK",
      type: "column",
      data: [500, 600, 700, 500, 300, 700, 600,500, 600, 700, 500, 300, 700, 600,500, 600, 700, 500, 300, 700, 600,500, 600, 700, 500, 300, 700, 600],
    },
    {
      name: "JUMLAH TOKO",
      type: "line",
      data: [600, 700, 800, 600, 500, 800, 700, 600, 700, 800, 600, 500, 800, 700, 600, 700, 800, 600, 500, 800, 700, 600, 700, 800, 600, 500, 800, 700],
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
  grid: {
  show: false,
  },
  dataLabels: {
    enabled: true,
    position: 'top',
    formatter: function (val) {
    return val ;
  },
    horizontal: true,
    offsetX: 0,
    style: {
        fontSize: '12px',
    }
},
  labels: [
    "Pontianak",
    "Bandung",
    "Cikokol",
    "Manado",
    "Plumbon",
    "Cianjur",
    "Jember",
    "Parung",
    "Bekasi",
    "Lampung",
    "Banjarmasin",
    "Batam",
    "Lombok",
    "Pekanbaru",
    "Serang",
    "Klaten",
    "Medan",
    "Makasar",
    "Bali",
    "Rembang",
    "Jambi",
    "Kotabumi",
    "Bandung2",
    "Semarang",
    "Balaraja",
    "Cileungsi_2",
    "Bogor",
    "Malang",
    "Cilacap",
  ],
  yaxis: {
        show: false,
      },
  xaxis: {
    type: "String",
    tickAmount: 30,
    tickPlacement: 'between',
  },
};

var chart = new ApexCharts(document.querySelector("#branch"), options);
chart.render();