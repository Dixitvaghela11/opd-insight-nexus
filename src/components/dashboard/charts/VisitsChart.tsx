
import React from "react";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface VisitsChartProps {
  data: {
    date: string;
    visits: number;
  }[];
  timeRange: string;
}

const VisitsChart: React.FC<VisitsChartProps> = ({ data, timeRange }) => {
  // In a real app, we'd filter this data based on timeRange
  // For demo, we'll just use the data as is
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="date" 
          stroke="#64748b" 
          fontSize={12} 
          tickLine={false}
          axisLine={{ stroke: '#e2e8f0' }}
        />
        <YAxis 
          stroke="#64748b" 
          fontSize={12} 
          tickLine={false}
          axisLine={{ stroke: '#e2e8f0' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "white", 
            border: "1px solid #e2e8f0",
            borderRadius: "0.375rem",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
          }} 
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="visits"
          stroke="#1E88E5"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={{ r: 4 }}
          name="OPD Visits"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitsChart;
