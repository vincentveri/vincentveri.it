import Link from 'next/link';
import Image from 'next/future/image';

import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import avatar from 'public/vincentveri.jpg';
import avatarColor from 'public/vincentveri-color.jpg';
import currentBook from 'public/pages/photo_2022-10-20_22-39-16.jpg';

export default function About() {
  return (
    <Container title="About – Vincent Veri">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle title="About me" />
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Vincent Veri, Senior Web Developer at Pixelfabrica</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Vincent Veri is the Senior Web Developer at{' '}
            <a href="http://pixelfabrica.it/">Pixelfabrica</a>, where he develops 
             websites and web applications. He is a portrait and sport photographer.
          </p>
          <p>
            He loves embracing new technologies, that&apos;s why he changed his blog from Jekyll to Next.js. 
            He spends a lot of time reading programming, business and art books. He cannot live without spending time at the gym.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I&apos;m Vincent. I&apos;m a Python web developer at{' '}
            <a href="https://pixelfabrica.it/">Pixelfabrica</a>, where I love to develop websites
            and web apps. I&apos;m a JavaScript enthusiastic and I&apos;m currently learning Next.js.
          </p>
          <p>
            I&apos;m reading <em>&quot;Cracking the coding interview&quot;</em> to master some important topics about algorithms,
            Big O notation, data structures and more.
          </p>
          <Image
                alt="Vincent Veri selfie"
                width={400}
                quality={100}
                src={currentBook}
                className="rounded-md"
              />
          <p>Another interesting book is Aditya Y. Bhargava&apos;s <em>&quot;Algoritmi spiegati in modo facile&quot;</em>, that also explains sorting algorithms,
            recursion, hash tables with simple drawings and various examples.
          </p>
          <p>
            I&apos;m always building something on the side. When the pandemic started, I found myself wanting to learn Python language.
          </p>
          <p>As a second job I take sports and portrait photos. I really love interacting with people.
             I&apos;m currently working on a shopping platform based on PrestaShop, where people can buy my photos.
             </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/vincentveri.jpg">
              <Image
                alt="Vincent Veri headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/vincentveri-color.jpg">
              <Image
                alt="Vincent Veri selfie"
                width={400}
                quality={100}
                src={avatarColor}
                className="rounded-md"
              />
            </a>
          </div>
          <h2>This site</h2>
          <p>
            This site is created using <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and the layout is based on the <a href="https://leerob.io/" target="_blank" rel="noreferrer">Lee Robinson&apos; blog</a>.
          </p>
          <p>The CSS framework I used is Tailwind CSS.</p>
          <h2>Cities I visited</h2>
          <ul>
            <li>Rome</li>
            <li>Berlin</li>
            <li>Paris</li>
            <li>Budapest</li>
            <li>London</li>
            <li>Manila</li>
            <li>Florence</li>
            <li>Milan</li>
            <li>Bologna</li>
            <li>Turin</li>
            <li>Amsterdam</li>
            <li>Bruxelles</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}