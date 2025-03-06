import { useQuery } from "@tanstack/react-query"
import { api } from "../axios"


export const useGetStats = ()=>{

    const { data : stats, isLoading : statsLoading, isError : statsError , error : statsErrorResp  } = useQuery({

        queryKey : ['stats'],
        queryFn : async ()=>{

            const resp = await api.get("/");

            const data = await resp.data

            console.log("Ap", data);
            
            return data;

        }

    })

    return { stats, statsLoading, statsError, statsErrorResp }


}