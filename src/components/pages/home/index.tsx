import {Header, HomeContent, Sidebar} from "@/components/widgets";
import s from './home.module.css'
export const HomePage = () =>{
    return(
        <div className={s.homeWrapper}>
            <Header/>
            <div className={s.contentWrapper}>
              <Sidebar />
              <HomeContent />
            </div>
        </div>
    )
}