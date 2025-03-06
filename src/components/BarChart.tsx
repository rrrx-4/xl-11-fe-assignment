import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";
import CustomTooltip from "./Tooltip";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF6699", "#FF3366"];




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
  width={40}
  tick={{ fontSize: 10 }} 
/>


        
          <Tooltip content={<CustomTooltip />} />

          
          <Bar dataKey="scaledValue" radius={[5, 5, 0, 0]} barSize={40}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
            <Legend  wrapperStyle={{
            fontSize: window.innerWidth > 600 ? "0.75rem" :"0.5rem" , 
          }} verticalAlign="bottom" align="center" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(CustomeBarChart);
