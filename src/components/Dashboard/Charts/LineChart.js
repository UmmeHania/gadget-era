import React from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, RadialBarChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='m-10'>
            <div className='mb-5'>
                <h1 className='text-center font-bold text-xl'>Monthly Selling</h1>
                <LineChart width={800} height={400} data={data}  >
                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h1 className='text-center font-bold text-xl'>Investment in Monthly</h1>
                <BarChart width={800} height={400} data={data}>
                    <Bar dataKey={"investment"} fill="#8884d8" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default MyLineChart;