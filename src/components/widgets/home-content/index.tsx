'use client'
import {getUserData} from "@/app/api/api-query/getUserData";
import useSWR from "swr";

export const HomeContent = () =>{
    const {data:any} = useSWR("userData", getUserData)
    // console.log(data)
    return(
        <>This home content</>
    )
}