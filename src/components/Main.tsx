import { useGetStats } from '../apis/queries/stats'
import Navbar from './Navbar'
import Cards from './Cards'
import Charts from './Charts'
import { useState } from 'react'



const Main = () => {

    // const {theme, toggleTheme} = useGlobalContext()

    const [ isAnalytics, setIsAnalytics ] = useState(false)

    const { stats, statsError, statsLoading, statsErrorResp } = useGetStats()

    
 


    if(statsLoading) {

      return <div className='w-full min-h-screen flex justify-center items-center' >

        <p className='dark:text-white text-xl' >Loading...</p>

      </div>

    }


    if(statsError){

      console.log("Error Data",  statsError, statsErrorResp);

      return (
        <div className='w-full min-h-screen flex justify-center items-center' >
          <p className='dark:text-white text-xl'  >Error : {statsErrorResp?.message || 'Something went wrong!'}</p>

        </div>
      ) 
      
      

    }
    

  return (
    <div className='dark:bg-gray-800 min-h-screen min-w-[300px]' >

    <Navbar isAnalytics={isAnalytics} setIsAnalytics={setIsAnalytics} />
    
    <main className='mt-[60px] ' >

      {
        stats.status === 'success' ?  isAnalytics ? <Charts stats={stats} /> :     <Cards stats={stats} /> :  <p className='text-xl dark:text-white' >Something went wrong</p>
      }

      {



    }
</main>


    

  </div>
  )
}




export default Main