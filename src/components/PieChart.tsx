import React, { useCallback } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend,  } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF6699", "#FF3366"];

const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200 dark:bg-gray-900 dark:text-white">
        <p className="text-sm font-semibold">{payload[0].payload.name} : <span className="font-bold">{payload[0].value}</span></p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({


  cx, cy, midAngle,  outerRadius, percent, index, name
}: any) => {
  const RADIAN = Math.PI / 180;

 
  
  const radius = outerRadius + 20; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={ 'gray' } 
      textAnchor={x > cx ? "start" : "end"} 
      dominantBaseline="central"
      className="text-xs font-semibold text-[8px] md:text-[12px]"
    >
      {`${name} (${(percent * 100).toFixed(1)}%)`}
    </text>
  );
};

const CustomPieChart: React.FC<{ data: { name: string; value: number }[] }> = ({ data }) => {

  const getTotal = useCallback(() => data.reduce((sum, entry) => sum + entry.value, 0), []);
const totalValue = getTotal();

  return (
    <div className="h-full w-full">
    <ResponsiveContainer width="100%" >
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          paddingAngle={5}
          fill="#8884d8"
          label={renderCustomizedLabel}
          stroke="#fff"
          strokeWidth={2}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: window.innerWidth > 600 ? "0.75rem" :"0.5rem" , // Tailwind's text-xs equivalent
            // '@media (min-width: 640px)': { fontSize: '0.875rem' }, // Tailwind's text-sm
            // '@media (min-width: 768px)': { fontSize: '1rem' }, // Tailwind's text-base
          }}
          formatter={(value, entry) => {
            const percentage = ((entry?.payload?.value / totalValue) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default React.memo(CustomPieChart) ;
