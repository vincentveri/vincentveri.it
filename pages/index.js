import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Avatar from '../components/avatar'
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <Head>
        <title>Vincent Veri</title>
        <meta name="description" content="Web developer and Photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-24 md:py-48 lg:py-64">
        <div class="mb-5 text-center">
          <Avatar />
        </div>
        
        <h1 className="text-4xl font-bold text-center">
          Web Developer and Photographer
        </h1>

        <p className="my-8 text-center">
          I love coding in Python and JavaScript. I also take sport photos as a second job.
        </p>

      <div className="flex flex-row">
        <div className="basis-1/2 text-center">
          <a href="https://instagram.com/vincentveri" target="_blank" rel="noreferrer" className="inline-block">
            <FaInstagram size="32px" />
          </a>
        </div>
        <div className="basis-1/2 text-center">
          <a href="https://github.com/vincentveri" target="_blank" rel="noreferrer" className="inline-block">
            <FaGithub size="32px" />
          </a>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          copyright &copy; 2022
        </a>
      </footer>
    </div>
  )
}
