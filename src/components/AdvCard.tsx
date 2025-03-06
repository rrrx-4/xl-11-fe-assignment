import React from "react"


const AdvCard = ({ value, label } : {value: string, label : string}) => {
  return (
    <div  className="bg-gray-200 dark:bg-gray-700 dark:text-white p-4 rounded-lg shadow-md " >

    <p className="text-[16px] md:text-[18px] font-bold">{value}</p>
    <div><span className='text-[8px] md:text-[10px]' >Amount | TDS | Count</span></div>
    <p className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold">{label}</p>
    </div>
  )
}

export default React.memo(AdvCard) 