import Link from "next/link";
import Image from "next/image";
import s from './header.module.css'
export const Header = () =>{
    return(
        <header className={s.header}>
            <div className="logo"><Image src={''} alt={'logoImg'}/></div>
            <div className="title">
                Helper
            </div>
            <div className="btnPanel">
                <Link href={'/Page/user/signIn'} >LogIn</Link>
                |
                <Link href={''} >LogOut</Link>
            </div>
        </header>
    )
}