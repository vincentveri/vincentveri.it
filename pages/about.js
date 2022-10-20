import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/vincentveri.jpg';
import avatarColor from 'public/vincentveri-color.jpg';
import currentBook from 'public/pages/photo_2022-10-20_22-39-16.jpg';

export default function About() {
  return (
    <Container title="About – Vincent Veri">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Vincent Veri, Senior Web Developer at Pixelfabrica</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Vincent Veri is the Senior Web Developer at{' '}
            <a href="http://pixelfabrica.it/">Pixelfabrica</a>, where he develops and
            builds websites and web applications. He is a portrait and sport photographer.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I&apos;m Vincent. I&apos;m a Python web developer at{' '}
            <a href="https://pixelfabrica.it/">Pixelfabrica</a>, where I love to develop websites
            and web apps. I&apos;m a JavaScript enthusiastic and I&apos;m currently learning Next.js.
          </p>
          <p>
            I'm reading <em>"Cracking the coding interview"</em> to master some important topics about algorithms,
            Big O notation, data structures and more.
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
        </div>
      </div>
    </Container>
  );
}