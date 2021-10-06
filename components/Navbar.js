import Link from 'next/Link'
import navbarStyles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    let router = useRouter();
    return (
        <div className={navbarStyles.nav}>
            <div className={navbarStyles.logomenu}>
                <Link href='/'><img src="/img/mirko-maggiore-logo.png" alt='Mirko Maggiore Web Design Logo'/></Link>
                <Link href='/'> Mirko Maggiore</Link>
            </div>
            <nav className={navbarStyles.menu}>
                <ul>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/portfolio'>Works</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
                <ul className={navbarStyles.languageMenu}>
                    <li className={navbarStyles.languageMenu__Item}><Link href= {router.locales[0]}>EN</Link></li>
                    <li className={navbarStyles.languageMenu__Item}><Link href= {router.locales[1]}>IT</Link></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
