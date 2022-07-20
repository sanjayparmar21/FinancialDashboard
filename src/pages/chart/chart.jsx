import { Grid, Typography } from '@mui/material';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function Chart() {

const data = [
    {
      dataKeyX: "Mar",
      dataKeyY: 0,
      totalCredit: 3,
      totalDebt: 0
    },
    {
      dataKeyX: "Apr",
      dataKeyY: 30,
      totalCredit: 50,
      totalDebt: 50
    },
    {
      dataKeyX: "May",
      dataKeyY: 60,
      totalCredit: 6,
      totalDebt: 2
    },
    {
      dataKeyX: "Jun",
      dataKeyY: 90,
      totalCredit: 50,
      totalDebt: 90
    },
    {
      dataKeyX: "Jul",
      dataKeyY: 120,
      totalCredit: 100,
      totalDebt: 20 
    }
];

    return (
    <>
        <Grid container item xs={12} sx={{ padding: '1vw' }}>
        <Typography variant='h6'>Billing</Typography>
        <ResponsiveContainer width="95%" height={350}>
        <LineChart
            data={data}
            margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0
            }}
            style={{ backgroundColor: "#ffffff" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dataKeyX" />
          <YAxis dataKey="dataKeyY" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalCredit"
            stroke="#8e59f2"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="totalDebt" stroke="#9aaac2" />
        </LineChart>
        </ResponsiveContainer>
        </Grid>
    </>
    )
}
