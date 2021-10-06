import homeStyles from '../styles/Home.module.css'
import styles from '../styles/Layout.module.css'
import Header from '../components/Header';
import Button from '../components/Button';
import Project from '../components/project';
import useTranslation from 'next-translate/useTranslation';


export default function Home() {
  let { t } = useTranslation ();

  return (
    <div>
      <Header />
      <section className={homeStyles.services}>
        <div className={homeStyles.services__item}>
          <img src="/img/webdesign-icon.png" alt='Web Design servizio offerto da Mirko Maggiore'/>
          <h3>Web Design</h3>
        </div>
        <div className={homeStyles.services__item}>
          <img src="/img/graphcdesign-icon.png" alt='Graphic Design servizio offerto da Mirko Maggiore'/>
          <h3>Graphic Design</h3>
        </div>
        <div className={homeStyles.services__item}>
          <img src="/img/consulting-icon.png" alt='Consulenza servizio offerto da Mirko Maggiore'/>
          <h3>Consulting</h3>
        </div>
      </section>
      <section className={styles.grid}>
        <div className={homeStyles.about}>
          <div className={styles.col, homeStyles.about__description}>
            <h3>{t("common:about")}</h3>
            <p>{t("common:aboutDescr")}</p>
            <Button/>
          </div>
          <div className={styles.col}>
            <img src="/img/about-mirko-maggiore.jpg" alt='Mirko Maggiore Web e Graphic Designer a Parma'/>
          </div>
        </div>
      </section>
      <section className={styles.grid}>
        <div className={homeStyles.quote}>
          <h3>{t("common:quote")}</h3>
        </div>
      </section>
      <section className={styles.grid}>
        <div className={homeStyles.about}>
          <div className={styles.col, homeStyles.about__description}>
            <h3>{t("common:works")}</h3>
            <p>{t("common:aboutDescr")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
