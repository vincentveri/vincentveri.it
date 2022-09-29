import { FaGithub, FaInstagram } from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';

export default function Home() {
  return (
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Vincent Veri
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Senior Web Developer at{' '}
                <span className="font-semibold">Pixelfabrica</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Helping developers build a faster web. Teaching about web
                development, serverless, and React / Next.js.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Vincent Veri"
                height={176}
                width={176}
                src="/profile.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <span className="h-8" />
        </div>
      </Container>
  )
}
