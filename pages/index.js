import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Avatar from '../components/avatar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vincent Veri</title>
        <meta name="description" content="Web developer and Photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div class="mb-5">
          <Avatar />
        </div>
        
        <h1 className="text-4xl font-bold">
          Web Developer and Photographer
        </h1>

        <p className={styles.description}>
          I love coding in Python and JavaScript. As a second job I take sport photos.
        </p>

        <div className={styles.grid}>
          <a href="https://instagram.com/vincentveri" target="_blank" rel="noreferrer" className={styles.card}>
            <h2>Instagram &rarr;</h2>
          </a>

          <a href="https://github.com/vincentveri" target="_blank" rel="noreferrer" className={styles.card}>
            <h2>GitHub &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
