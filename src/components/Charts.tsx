import React, { useCallback } from 'react'
import ProfessionalBarChart from './BarChart'
import CustomPieChart from './PieChart'
import ProfessionalAreaChart from './AreaChart'
import { ActiveUserskeys, barChartKeys, depositBonuseKeys, newUsersKeys } from '../utils/chartsKey'

type BarChart = {

    name : string;
    value : number
  
  }
  

const Charts = ({stats} : any) => {


    const getBarChartData = useCallback((dataObj : any)=>{
      
        const data : BarChart[] = [];
        
        for(let key in dataObj){
          
          console.log(key);
  
          if(barChartKeys.hasOwnProperty(key)){
  
            const ele = {
              name : barChartKeys[key],
              value : dataObj[key]
            }
  
  
            data.push(ele)
  
          }
          
          
        }
  
        console.log("ssss",  data);
  
        const maxValue = Math.max(...data.map(d => d.value));
  const scalingFactor = maxValue / 100; // Adjust to fit chart size
  const normalizedData = data.map(d => ({
    ...d,
    scaledValue: Math.max(d.value / scalingFactor, 5) // Ensure a minimum visible bar height
  }));
        
        
        return normalizedData
        
      }, [stats])
  
  
      const barChartData = stats?.data ? getBarChartData(stats?.data)   : []
  
      const getNewUserData = useCallback((dataObj : any)=>{
  
        const data : BarChart[] = [];
        
        for(let key in dataObj){
          
          console.log(key);
  
          if(newUsersKeys.hasOwnProperty(key)){
  
            const ele = {
              name : newUsersKeys[key],
              value : dataObj[key]
            }
  
  
            data.push(ele)
  
          }
          
          
        }
  
        console.log("PIE",  data);
  
  
        return data
  
  
      }, [stats])
  
      const newUserData = stats?.data ? getNewUserData(stats?.data)   : []
  
  
      const getActiveUserData = useCallback((dataObj : any)=>{
  
        const data : BarChart[] = [];
        
        for(let key in dataObj){
          
          console.log(key);
  
          if(ActiveUserskeys.hasOwnProperty(key)){
  
            const ele = {
              name : ActiveUserskeys[key],
              value : dataObj[key]
            }
  
  
            data.push(ele)
  
          }
          
          
        }
  
        console.log("PIE",  data);
  
  
        return data
  
  
      }, [stats])
  
      const activeUserData = stats?.data ? getActiveUserData(stats?.data)   : []
  
  
      const getDepositBonusData = (dataObj : any)=>{
  
        const data : BarChart[] = [];
        
        for(let key in dataObj){
          
          console.log(key);
  
          if(depositBonuseKeys.hasOwnProperty(key)){
  
            const ele = {
              name : depositBonuseKeys[key],
              value : dataObj[key]
            }
  
  
            data.push(ele)
  
          }
          
          
        }
  
        console.log("Area",  data);
  
  
        return data
  
  
      }
  
      const depositBonusData = stats?.data ? getDepositBonusData(stats?.data)   : []


  return (
    <div className={`min-w-[300px] grid grid-cols-1 md:grid-cols-2 gap-[20px] p-[10px] inset-0 transition-all duration-500 $`} >


        <div className='h-[300px]  md:h-[400px]'>
        <ProfessionalBarChart data={barChartData} />
        </div>
    
        <div className='h-[300px] md:h-[400px]' >
        <CustomPieChart data={newUserData} />
        </div>
    
        <div className='h-[300px] md:h-[400px]' >
        <CustomPieChart data={activeUserData} />
        </div>
    
        <div className='h-[300px] md:h-[400px]' >
        <ProfessionalAreaChart data={depositBonusData} />
        </div>
    
        </div>
  )
}

export default React.memo(Charts)