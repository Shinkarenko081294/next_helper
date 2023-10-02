import s from "@/components/pages/home/home.module.css";
import {Header, HomeContent, Sidebar} from "@/components/widgets";
import {SignIn} from "@/components/widgets/sign-in";

export default function signIn(){
    return(
        <div className={s.homeWrapper}>
            <Header/>
            <div className={s.contentWrapper}>
                <Sidebar />
                <SignIn />
            </div>
        </div>
    )
}