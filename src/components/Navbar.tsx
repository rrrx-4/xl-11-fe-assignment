import { useState } from "react";
import useGlobalContext from "../Context";
import { useQueryClient } from "@tanstack/react-query";

export default function Navbar({  isAnalytics, setIsAnalytics } : any) {

  const { toggleTheme, theme } = useGlobalContext()

  const queryClient = useQueryClient()

  const [ count, setCount ] = useState(0)

  const callApi = ()=>{

    queryClient.invalidateQueries({queryKey: ['stats']})

    setCount((c)=>c+1)

  }


    return (
      <nav className="fixed top-0 w-full min-w-[300px] bg-white shadow-md dark:bg-gray-900 h-[60px] flex justify-between items-center z-50">
        <div className="flex gap-4 w-full justify-end mr-[10px] text-[10px] sm:text-[12px] md:text-[14px]">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="px-4 py-2  bg-gray-800 text-white rounded-md hover:bg-gray-700 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300 transition"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
  
          {/* Analytics/Card Switch Button */}
          <button 
            onClick={() => setIsAnalytics(!isAnalytics)} 
            className={`px-4 py-2 rounded-md transition ${
              isAnalytics 
                ? "bg-blue-600 text-white hover:bg-blue-500" 
                : "bg-green-600 text-white hover:bg-green-500"
            }`}
          >
            {isAnalytics ? "Card View" : "Analytics View"}
          </button>

          <button className="bg-yellow-300 text-gray-400 px-4 py-2 rounded-md transition"  onClick={callApi} >RateLimiting: {count}</button>

        </div>
      </nav>
    );
  }
  