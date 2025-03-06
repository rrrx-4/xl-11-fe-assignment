import React from 'react'

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

export default CustomTooltip