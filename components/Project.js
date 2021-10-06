import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'

const Project = () => {
    let { t } = useTranslation ();
    return (
        
        <div className={styles.project}>
            <div className={styles.projectImage}>
                <img src="" alt=''/>
            </div>
            <div className={styles.projectDescr}>
                <h3>Titolo Progetto</h3>
                <h4>Destign Type</h4>
                <Link href="/">Scopri il progetto</Link>
            </div>
        </div>

    )
}

export default Project 
