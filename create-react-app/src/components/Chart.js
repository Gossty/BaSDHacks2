import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Jan', 0),
  createData('Feb', 1),
  createData('Mar', 2),
  createData('Apr', 1),
  createData('May', 5),
  createData('Jun', 2),
  createData('July', 5),
  createData('Aug', 1),
  createData('Sep', 2),
  createData('Oct', 1),
  createData('Nov', 2),
  createData('Dec', 13),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Crime Rate</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              % Increase
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}