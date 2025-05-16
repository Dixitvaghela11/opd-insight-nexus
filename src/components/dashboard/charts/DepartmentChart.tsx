
import React from "react";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface DepartmentChartProps {
  data: {
    department: string;
    visits: number;
    color: string;
  }[];
}

const DepartmentChart: React.FC<DepartmentChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 70,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="department" 
          stroke="#64748b" 
          fontSize={12} 
          tickLine={false}
          axisLine={{ stroke: '#e2e8f0' }}
          angle={-45}
          textAnchor="end"
          height={70}
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
        <Bar 
          dataKey="visits" 
          fill="#6366F1" 
          radius={[4, 4, 0, 0]} 
          name="Visit Count" 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DepartmentChart;
