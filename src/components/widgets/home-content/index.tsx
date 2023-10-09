'use client'
import {getUserData} from "@/app/api/api-query/getUserData";
import useSWR from "swr";
import {useEffect, useState} from "react";
import useAuthStore from "@/app/store/authStore/authStore";

export const HomeContent = () =>{
    const {toggleUser,toggleInitial,user} = useAuthStore()
    const { data, isLoading, error } = useSWR("/api", getUserData);
    useEffect(() => {
        if(data != undefined){
            toggleUser(data)
            toggleInitial(true)
        }
    }, [data]);


    return(
        <>
            {isLoading && <h1>Loading.....</h1>}
            <h1>Email: {user.fullName}</h1>
            This home content
        </>
    )
}