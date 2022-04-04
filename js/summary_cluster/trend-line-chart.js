const dynamicWidth = 24 * 50;
const chartWidth  = dynamicWidth < window.innerWidth ? '100%': dynamicWidth;
      var options = {
        series: [
          {
            name: "High Sales Low Inventory",
            data: [
              10000, 15000, 20000, 18000, 12000, 16000, 31000, 45000, 20000,
              30000, 12000, 24000, 35000, 12000, 16000, 19000, 25000, 28000,
              30000, 32000, 26000, 24000, 22000, 16000,
            ],
          },
          {
            name: "High Sales Proper Inventory",
            data: [
              10000, 25000, 16000, 10000, 15000, 24000, 35000, 37000, 28000,
              26000, 24000, 22000, 24000, 28000, 32000, 36000, 32000, 28000,
              27000, 25000, 22000, 28000, 32000, 36000,
            ],
          },
          {
            name: "Moderate Sales",
            data: [
              15000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000,
              34000, 36000, 32000, 30000, 28000, 26000, 30000, 32000, 28000,
              30000, 34000, 38000, 42000, 40000, 38000,
            ],
          },
          {
            name: "No Sales",
            data: [
              20000, 24000, 28000, 32000, 34000, 32000, 30000, 28000, 26000,
              24000, 26000, 28000, 32000, 36000, 40000, 44000, 42000, 40000,
              36000, 30000, 25000, 20000, 15000, 18000,
            ],
          },
        ],
        chart: {
          height: 350,
          width: chartWidth,
          type: "line",
          toolbar: {
            show: false,
          },
        },
        colors: ["#50B052", "#F8C045", "#9186D0", "#FF8B8B"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Trend Indikator Project vs LY 2020",
          align: "left",
        },
        grid: {
          show: false,
        },
        markers: {
          size: 4,
        },
        xaxis: {
          categories: [
            "15 Jan",
            "31 Jan",
            "15 Feb",
            "28 Feb",
            "15 Mar",
            "31 Mar",
            "15 Apr",
            "30 Apr",
            "15 May",
            "31 May",
            "15 Jun",
            "30 Jun",
            "15 Jul",
            "31 Jul",
            "15 Aug",
            "31 Aug",
            "15 Sep",
            "30 Sep",
            "15 Okt",
            "31 Okt",
            "15 Nov",
            "30 Nov",
            "15 Dec",
            "31 Dec",
          ],
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      };

      var chart = new ApexCharts(document.querySelector("#chartline"), options);
      chart.render();
 