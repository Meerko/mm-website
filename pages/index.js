import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mirko Maggiore - Web designer</title>
        <meta name="description" content="Mirko Maggiore - Web designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mirko Maggiore
        </h1>

        <p className={styles.description}>
          Web & Graphic Designer
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>About Me</h2>
            <p>Learn more about me</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>How I design</h2>
            <p>Discover my process</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Portfolio</h2>
            <p>Discover my projects</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Contact</h2>
            <p>Get in touch with me</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mirko Maggiore - Web & Graphic Designer
        </a>
      </footer>
    </div>
  )
}