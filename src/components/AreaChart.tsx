import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import CustomTooltip from "./Tooltip";



const CustomAreaChart: React.FC<{ data: { name: string; value: number }[] }> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
         
        >
          <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.1} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis width={40} label={{ 
    value: "Amount", 
    angle: -90, 
    position: "insideLeft", 
    dy: 0, 
    dx: -5, 
    style: { textAnchor: "middle", fontSize: 10 } 
  }}  tick={{ fontSize: 10 }} />


          <Tooltip content={<CustomTooltip />} />


          <Legend  wrapperStyle={{
            fontSize: window.innerWidth > 600 ? "0.75rem" :"0.5rem" ,}} verticalAlign="bottom" align="center" />


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
