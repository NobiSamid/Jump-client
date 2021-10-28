import React from 'react';
import { Tooltip } from 'recharts/lib';
import { Bar } from 'recharts/lib/cartesian/Bar';
import { CartesianGrid } from 'recharts/lib/cartesian/CartesianGrid';
import { XAxis } from 'recharts/lib/cartesian/XAxis';
import { YAxis } from 'recharts/lib/cartesian/YAxis';
import { BarChart } from 'recharts/lib/chart/BarChart';
import { Legend } from 'recharts/lib/component/Legend';
import "./Home.css";

const ReChart = () => {

    // ////////////Services Chart Data
    const data = [
  {
    name: "January",
    Service: 4000,
    amt: 2400
  },
  {
    name: "Feb",
    Service: 2780,
    amt: 2000
  },
  {
    name: "March",
    Service: 6000,
    amt: 2290
  },
  {
    name: "April",
    Service: 4000,
    amt: 2000
  },
  {
    name: "May",
    Service: 3000,
    amt: 2181
  },
  {
    name: "June",
    Service: 3390,
    amt: 2500
  },
  {
    name: "July",
    Service: 3490,
    amt: 2100
  }
];
    return (
        <div className="service-chart">
        <h1>Services that provided through out the year</h1>

        {/* Services Barchart */}
            <BarChart className="chart-main"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Service" fill="#82ca9d" />
            </BarChart>
            
        </div>
    );
};

export default ReChart;