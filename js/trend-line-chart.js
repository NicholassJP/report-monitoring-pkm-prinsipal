

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
          text: "Trend Indikator Project vs LY",
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
            "Jan 20",
            "Feb 20",
            "Mar 20",
            "Apr 20",
            "May 20",
            "Jun 20",
            "Jul 20",
            "Aug 20",
            "Sep 20",
            "Okt 20",
            "Nov 20",
            "Dec 20",
            "Jan 21",
            "Feb 21",
            "Mar 21",
            "Apr 21",
            "May 21",
            "Jun 21",
            "Jul 21",
            "Aug 21",
            "Sep 21",
            "Okt 21",
            "Nov 21",
            "Dec 21",
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
 