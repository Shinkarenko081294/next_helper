import {Header, HomeContent, Sidebar} from "@/components/widgets";
import s from './home.module.css'
import {FC} from "react";

type PropsType = {
    children: React.ReactNode
}
export const HomePage:FC<PropsType> = ({children}) =>{
    return(
        <div className={s.homeWrapper}>
            <Header/>
            <div className={s.contentWrapper}>
              <Sidebar />
                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    )
}