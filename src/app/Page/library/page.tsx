import s from "@/components/pages/home/home.module.css";
import {Header, HomeContent, Sidebar} from "@/components/widgets";

export default function Library(){
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