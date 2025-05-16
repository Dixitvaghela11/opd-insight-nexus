
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ServicesByPayerChartProps {
  data: {
    service: string;
    insurance: number;
    selfPay: number;
    corporate: number;
    government: number;
  }[];
}

const ServicesByPayerChart: React.FC<ServicesByPayerChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="service" 
          stroke="#64748b" 
          fontSize={12} 
          tickLine={false} 
          axisLine={{ stroke: '#e2e8f0' }}
          angle={-45}
          textAnchor="end"
          height={60}
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
        <Bar dataKey="insurance" stackId="a" fill="#4CAF50" name="Insurance" radius={[0, 0, 0, 0]} />
        <Bar dataKey="selfPay" stackId="a" fill="#2196F3" name="Self Pay" radius={[0, 0, 0, 0]} />
        <Bar dataKey="corporate" stackId="a" fill="#FF9800" name="Corporate" radius={[0, 0, 0, 0]} />
        <Bar dataKey="government" stackId="a" fill="#9C27B0" name="Government" radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ServicesByPayerChart;
