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
          categories: this.props.time,
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
        {this.props.dat ?        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={300}
        /> : <div>This day don't have data</div>}
      </div>
    );
  }
}

export default ChartJS;
