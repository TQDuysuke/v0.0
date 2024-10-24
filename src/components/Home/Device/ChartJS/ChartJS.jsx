// ChartJS.js

import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartJS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: {
          text: "Monthly usage chart",
        },
        chart: {
          id: "monthly-chart",
        },
        xaxis: {
          categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ],
        },
        dataLabels: {
          style: {
            colors: ['#000000'],
          }
        },
        plotOptions: {
          line: {
            horizontal: false,
            dataLabels: {
              position: 'top'
            }
          }
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: true,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          hideEmptySeries: true,
          fillSeriesColor: false,
          theme: true,
          style: {
            fontSize: '12px',
            fontFamily: undefined
          },
          onDatasetHover: {
              highlightDataSeries: true,
          },
          marker: {
              show: true,
          },
      },     
      },
      series: [
        {
          name: "Monthly usage (min)",
          data: [1,2,3,4,5,6,7,8,9,10,11,12],
        },
      ],
    };
  }

  render() {
    return (
      <div className="monthly-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="700"
          height={300}
        />
      </div>
    );
  }
}

export default ChartJS;
