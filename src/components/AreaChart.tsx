import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-900 dark:text-white p-3 rounded-lg shadow-md border border-gray-200">
        <p className="text-sm font-semibold">{payload[0].payload.name}: <span className="font-bold">{payload[0].value}</span></p>
      </div>
    );
  }
  return null;
};

const CustomAreaChart: React.FC<{ data: { name: string; value: number }[] }> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
         
        >
          <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.1} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis label={{ 
    value: "Amount", 
    angle: -90, 
    position: "insideLeft", 
    dy: 0, 
    dx: 0, 
    style: { textAnchor: "middle", fontSize: 12 } 
  }}  tick={{ fontSize: 12 }} />


          <Tooltip content={<CustomTooltip />} />


          <Legend verticalAlign="bottom" align="center" />


          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="url(#colorValue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(CustomAreaChart) ;
