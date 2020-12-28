(function($) {
  'use strict';
  $(function() {
    if ($("#sales-today").length) {
      var salesTodayData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2000, 2005, 2003, 2010, 2016, 2014, 2007, 2018, 2010, 2002],
            backgroundColor: ["#6045ec"],
            borderColor: ["#6045ec"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
            ],
            pointBackgroundColor: [
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
            ]
          }
        ]
      };

      var salesTodayOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#dfe1e5",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#sales-today")
        .get(0)
        .getContext("2d");
      var salesTodayChart = new Chart(lineChartCanvas, {
        type: "line",
        data: salesTodayData,
        options: salesTodayOptions
      });
    }
    if ($("#sales-today-dark").length) {
      var salesTodayDarkData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2000, 2005, 2003, 2010, 2016, 2014, 2007, 2018, 2010, 2002],
            backgroundColor: ["#6045ec"],
            borderColor: ["#6045ec"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
            ],
            pointBackgroundColor: [
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
              "#6045ec",
            ]
          }
        ]
      };

      var salesTodayDarkOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#sales-today-dark")
        .get(0)
        .getContext("2d");
      var salesTodayDarkChart = new Chart(lineChartCanvas, {
        type: "line",
        data: salesTodayDarkData,
        options: salesTodayDarkOptions
      });
    }

    if ($("#pending-order").length) {
      var pendingOrderData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2018, 2015, 2012, 2010, 2008, 2006, 2005, 2004, 2003, 2001],
            backgroundColor: ["#f02632"],
            borderColor: ["#f02632"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 4, 0, 4, 0, 4, 0, 0, 4],
            pointHoverRadius: [4, 0, 4, 0, 4, 0, 4, 0, 0, 4],
            pointBorderColor: [
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
            ],
            pointBackgroundColor: [
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
            ]
          }
        ]
      };

      var pendingOrderOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#dfe1e5",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#pending-order")
        .get(0)
        .getContext("2d");
      var pendingOrderChart = new Chart(lineChartCanvas, {
        type: "line",
        data: pendingOrderData,
        options: pendingOrderOptions
      });
    }

    if ($("#pending-order-dark").length) {
      var pendingOrderDarkData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2018, 2015, 2012, 2010, 2008, 2006, 2005, 2004, 2003, 2001],
            backgroundColor: ["#f02632"],
            borderColor: ["#f02632"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 4, 0, 4, 0, 4, 0, 0, 4],
            pointHoverRadius: [4, 0, 4, 0, 4, 0, 4, 0, 0, 4],
            pointBorderColor: [
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
            ],
            pointBackgroundColor: [
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
              "#f02632",
            ]
          }
        ]
      };

      var pendingOrderDarkOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#pending-order-dark")
        .get(0)
        .getContext("2d");
      var pendingOrderDarkChart = new Chart(lineChartCanvas, {
        type: "line",
        data: pendingOrderDarkData,
        options: pendingOrderDarkOptions
      });
    }



    if ($("#visitors-today").length) {
      var visitorsTodayData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2001, 2003, 2004, 2005, 2006, 2008, 2010, 2012, 2015, 2018],
            backgroundColor: ["#2677f0"],
            borderColor: ["#2677f0"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 0, 0, 4, 0, 4, 0, 4, 4],
            pointHoverRadius: [4, 0, 0, 0, 4, 0, 4, 0, 4, 4],
            pointBorderColor: [
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0"
            ],
            pointBackgroundColor: [
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0"
            ]
          }
        ]
      };

      var visitorsTodayOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#dfe1e5",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#visitors-today")
        .get(0)
        .getContext("2d");
      var visitorsTodayChart = new Chart(lineChartCanvas, {
        type: "line",
        data: visitorsTodayData,
        options: visitorsTodayOptions
      });
    }

    if ($("#visitors-today-dark").length) {
      var visitorsTodayDarkData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2001, 2003, 2004, 2005, 2006, 2008, 2010, 2012, 2015, 2018],
            backgroundColor: ["#2677f0"],
            borderColor: ["#2677f0"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 0, 0, 4, 0, 4, 0, 4, 4],
            pointHoverRadius: [4, 0, 0, 0, 4, 0, 4, 0, 4, 4],
            pointBorderColor: [
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0"
            ],
            pointBackgroundColor: [
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0",
              "#2677f0"
            ]
          }
        ]
      };

      var visitorsTodayDarkOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#visitors-today-dark")
        .get(0)
        .getContext("2d");
      var visitorsTodayDarkChart = new Chart(lineChartCanvas, {
        type: "line",
        data: visitorsTodayDarkData,
        options: visitorsTodayDarkOptions
      });
    }


    if ($("#total-earnings").length) {
      var totalEarningsData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2001, 2004, 2008, 2014, 2018, 2015, 2001, 2010, 2005, 2001],
            backgroundColor: ["#ffc300"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 0, 0, 4, 0, 4, 4, 0, 4],
            pointHoverRadius: [4, 0, 0, 0, 4, 0, 4, 4, 0, 4],
            pointBorderColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ],
            pointBackgroundColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ]
          }
        ]
      };

      var totalEarningsOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#dfe1e5",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#total-earnings")
        .get(0)
        .getContext("2d");
      var totalEarningsChart = new Chart(lineChartCanvas, {
        type: "line",
        data: totalEarningsData,
        options: totalEarningsOptions
      });
    }

    if ($("#total-earnings-dark").length) {
      var totalEarningsDarkData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [2001, 2004, 2008, 2014, 2018, 2015, 2001, 2010, 2005, 2001],
            backgroundColor: ["#ffc300"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 0, 0, 0, 4, 0, 4, 4, 0, 4],
            pointHoverRadius: [4, 0, 0, 0, 4, 0, 4, 4, 0, 4],
            pointBorderColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ],
            pointBackgroundColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ]
          }
        ]
      };

      var totalEarningsDarkOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 4,
                max: 2020,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#total-earnings-dark")
        .get(0)
        .getContext("2d");
      var totalEarningsChart = new Chart(lineChartCanvas, {
        type: "line",
        data: totalEarningsDarkData,
        options: totalEarningsDarkOptions
      });
    }



    if ($("#total-revenue").length) {
      var totalRevenueData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Online",
            data: [2500, 3005, 3400, 3900, 4300, 4870, 5400, 5930, 6390, 7000],
            backgroundColor: ["#0fc036"],
            borderColor: ["#0fc036"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036"
            ],
            pointBackgroundColor: [
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036"
            ]
          },
          {
            label: "Offline",
            data: [2000, 2505, 2900, 3400, 3800, 4370, 4900, 5430, 5890, 6500],
            backgroundColor: ["#ffc300"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ],
            pointBackgroundColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ]
          }
        ]
      };

      var totalRevenueOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#dfe1e5",
                zeroLineColor: "#dfe1e5"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 500,
                max: 7000,
                fontColor: "#818a91",
                fontSize: 8,
                callback: function(value, index, values) {
                  return '$' + value;
              }
              }
            }
          ],
          xAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: false,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#818a91",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
              text.push('<li><span style="background-color:' + 
                         chart.data.datasets[i].backgroundColor + 
                         '"></span>'); 
              if (chart.data.datasets[i].label) { 
                  text.push(chart.data.datasets[i].label); 
              } 
              text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .9
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#total-revenue")
        .get(0)
        .getContext("2d");
      var totalEarningsChart = new Chart(lineChartCanvas, {
        type: "line",
        data: totalRevenueData,
        options: totalRevenueOptions
      });
      document.getElementById('chart-legend-revenue').innerHTML = totalEarningsChart.generateLegend();

    }


    if ($("#total-revenue-dark").length) {
      var totalRevenueDarkData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        datasets: [
          {
            label: "Online",
            data: [2500, 3005, 3400, 3900, 4300, 4870, 5400, 5930, 6390, 7000],
            backgroundColor: ["#0fc036"],
            borderColor: ["#0fc036"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036"
            ],
            pointBackgroundColor: [
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036",
              "#0fc036"
            ]
          },
          {
            label: "Offline",
            data: [2000, 2505, 2900, 3400, 3800, 4370, 4900, 5430, 5890, 6500],
            backgroundColor: ["#ffc300"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ],
            pointBackgroundColor: [
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300",
              "#ffc300"
            ]
          }
        ]
      };

      var totalRevenueDarkOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 500,
                max: 7000,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8,
                callback: function(value, index, values) {
                  return '$' + value;
              }
              }
            }
          ],
          xAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: false,
                color: "rgba(223, 225, 229, .2)",
                zeroLineColor: "rgba(223, 225, 229, .2)"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "rgba(223, 225, 229, .2)",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
              text.push('<li><span style="background-color:' + 
                         chart.data.datasets[i].backgroundColor + 
                         '"></span>'); 
              if (chart.data.datasets[i].label) { 
                  text.push(chart.data.datasets[i].label); 
              } 
              text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .9
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#total-revenue-dark")
        .get(0)
        .getContext("2d");
      var totalEarningsDarkChart = new Chart(lineChartCanvas, {
        type: "line",
        data: totalRevenueDarkData,
        options: totalRevenueDarkOptions
      });
      document.getElementById('chart-legend-revenue').innerHTML = totalEarningsDarkChart.generateLegend();

    }





    if ($('#ct-chart-stacked-bar').length) {
      new Chartist.Bar('#ct-chart-stacked-bar', {
        labels: ['100', '200', '300', '400', '500', '600'],
        series: [
          ['150', '190', '59', '80', '140'],
          ['40', '63', '29', '10', '180'],
          ['192', '14', '40', '85', '94'],
        ]
      }, {
        stackBars: true,
        horizontalBars: true,
        height: "220px",
      }).on('draw', function(data) {
        if (data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 10px'
          });
        }
      });
    }
    if ($("#table-chart-1").length) {
      var tableChart1Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(15,192,54, .3)"],
            borderColor: ["#0fc036"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart1Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-1")
        .get(0)
        .getContext("2d");
      var tableChart1 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart1Data,
        options: tableChart1Options
      });
    }
    if ($("#table-chart-2").length) {
      var tableChart2Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(255,195,0, .3)"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart2Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-2")
        .get(0)
        .getContext("2d");
      var tableChart2 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart2Data,
        options: tableChart2Options
      });
    }
    if ($("#table-chart-3").length) {
      var tableChart3Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(240,38,50, .3)"],
            borderColor: ["#f02632"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart3Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-3")
        .get(0)
        .getContext("2d");
      var tableChart3 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart3Data,
        options: tableChart3Options
      });
    }
    if ($("#table-chart-4").length) {
      var tableChart4Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(96,69,236, .3)"],
            borderColor: ["#6045ec"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart4Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-4")
        .get(0)
        .getContext("2d");
      var tableChart4 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart4Data,
        options: tableChart4Options
      });
    }
    if ($("#table-chart-5").length) {
      var tableChart5Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(255,195,0, .3)"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart5Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-5")
        .get(0)
        .getContext("2d");
      var tableChart5 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart5Data,
        options: tableChart5Options
      });
    }
    if ($("#table-chart-6").length) {
      var tableChart6Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(240,38,50, .3)"],
            borderColor: ["#f02632"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart6Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-6")
        .get(0)
        .getContext("2d");
      var tableChart6 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart6Data,
        options: tableChart6Options
      });
    }
    if ($("#table-chart-7").length) {
      var tableChart7Data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [5,10,15, 8, 15],
            backgroundColor: ["rgba(255,195,0, .3)"],
            borderColor: ["#ffc300"],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }
        ]
      };

      var tableChart7Options = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: false,
            }
          ],
          xAxes: [
            {
              display: false,
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          display: false,
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#table-chart-7")
        .get(0)
        .getContext("2d");
      var tableChart7 = new Chart(lineChartCanvas, {
        type: "line",
        data: tableChart7Data,
        options: tableChart7Options
      });
    }
    
    if ($("#news-letter-chart").length) {
      var newsLetterChartData = {
        labels: [
          "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","37","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","53","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [104, 72, 45, 80, 77, 89, 141, 106, 119, 73, 14,55, 80, 135, 8, 45, 56, 128, 144, 127, 91, 135, 110, 43, 112, 100, 5, 106, 133, 125, 27, 30, 7, 45, 107, 5, 28, 125, 73, 79, 51, 55, 147, 134, 88, 14, 75, 42, 73, 27, 5, 134, 5, 52, 121, 121, 127, 20, 141, 43, 28, 25, 69, 59, 133, 76, 5, 75, 135, 91, 140, 12, 14, 67, 124, 55, 42, 79, 86],
            backgroundColor: ["#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632"],
            borderColor: ["#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632", "#f02632"],
            borderWidth: 2,
            fill: false,
            pointBorderWidth: 1,
           
          }
        ]
      };

      var newsLetterChartOptions = {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: false,
                color: "#dfe1e5",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 25,
                max: 150,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#2e294e",
                fontSize: 8
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .6
          }
        },
        tooltips: {
          backgroundColor: "rgba(48, 69, 236, 1)"
        }
      };

      var lineChartCanvas = $("#news-letter-chart")
        .get(0)
        .getContext("2d");
      var newsLetterChart = new Chart(lineChartCanvas, {
        type: "bar",
        data: newsLetterChartData,
        options: newsLetterChartOptions
      });
    }

  });
})(jQuery);