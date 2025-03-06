import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF6699", "#FF3366"];


const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200 dark:bg-gray-900 dark:text-white">
        <p className="text-sm font-semibold">{payload[0].payload.name}: <span className="font-bold">{payload[0].value}</span></p>
      </div>
    );
  }
  return null;
};

const CustomeBarChart: React.FC<{ data: { name: string; scaledValue: number; value: number }[] }> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" >
        <BarChart data={data} >
         
          <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.1} />

       
          <XAxis tick={false}  />
          <YAxis 
  label={{ 
    value: "Value", 
    angle: -90, 
    position: "insideLeft", 
    dy: 0, 
    dx: 0, 
    style: { textAnchor: "middle", fontSize: 12 } 
  }} 
  tick={{ fontSize: 10 }} 
/>


        
          <Tooltip content={<CustomTooltip />} />

          
          <Bar dataKey="scaledValue" radius={[5, 5, 0, 0]} barSize={40}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
            <Legend verticalAlign="bottom" align="center" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(CustomeBarChart);
