import Link from 'next/Link'
import {RiHome6Fill }  from "react-icons/ri"
import { RiLayoutGridFill }  from "react-icons/ri"
import { RiMailSendFill }  from "react-icons/ri"
import { SiAboutDotMe }  from "react-icons/si"
import navbarMobStyles from '../styles/NavbarMob.module.css'

const NavbarMob = () => {
    return (
        <div className={navbarMobStyles.navMob}>
            <nav className={navbarMobStyles.menu}>
                <ul>
                    <li>
                        <Link href='/about'><RiHome6Fill/></Link>
                    </li>
                    <li>
                        <Link href='/about'><RiLayoutGridFill/></Link>
                    </li>
                    <li>
                        <Link href='/'><img src="/img/mirko-maggiore-logo.png" alt='Mirko Maggiore Web Design Logo'/></Link>
                    </li>
                    <li>
                        <Link href='/about'><RiMailSendFill/></Link>
                    </li>
                    <li>
                        <Link href='/about'><SiAboutDotMe/></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarMob
