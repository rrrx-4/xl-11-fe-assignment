import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark"

type ContextType = {

  theme : Theme;
  toggleTheme : ()=>void

}

const Context = createContext<ContextType>({
  theme: "light",
  toggleTheme: () => {},
});


export const ContextProvider = ({children} : {children: React.ReactNode})=>{

  const [theme , setTheme] = useState<Theme>("light");

  const toggleTheme = ()=>{

    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(theme === 'light' ? 'dark' : 'light')

  }


    return (
        <Context.Provider value={{theme, toggleTheme} }>
        {children}
      </Context.Provider>
    )


}

const useGlobalContext = ()=>{


  const context= useContext(Context)



  return context

}

export default useGlobalContext