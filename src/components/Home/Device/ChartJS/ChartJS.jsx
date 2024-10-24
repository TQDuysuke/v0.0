// ChartJS.js

import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartJS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: {
          text: this.props.name,
        },
        chart: {
          id: this.props.name,
        },
        xaxis: {
          categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
          ,
        }, 
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
      series: [
        {
          name: this.props.name,
          data: this.props.dat,
          color: this.props.color
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
          type="area"
          height={300}
        />
      </div>
    );
  }
}

export default ChartJS;
