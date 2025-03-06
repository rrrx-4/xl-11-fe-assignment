import React from 'react'
import Card from './Card'
import AdvCard from './AdvCard'
import { labels } from '../utils/label'

const Cards = ({stats}: any) => {
    console.log("lll");
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 min-w-[200px] inset-0 transition-all duration-500" >
    {
      stats?.data && Object.keys(stats?.data).filter((k)=>k !== 'withdrawData').map((property)=>{

        return <Card label={labels[property] || property} value={stats.data[property]}  />

      })
    }
    {
      stats?.data && stats.data.withdrawData.map((wd : {_id:string, totalAmount: number, tdsAmount : number, count : number})=>{

        return <AdvCard value={`${wd.totalAmount} | ${wd.tdsAmount} | ${wd.count} `}  label={`Withdraw ${wd._id.toLowerCase()} `} />

      })
    }
</div>  )
}

export default React.memo(Cards)