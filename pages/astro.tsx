import Link from 'next/link';
import Image from 'next/future/image';

import Container from '../components/Container';
import astro1 from 'public/static/images/astro/my-little-dog.jpg';
import astro2 from 'public/static/images/astro/astro-2.jpg';
import astro3 from 'public/static/images/astro/astro-3.jpg';

export default function Astro() {
  return (
    <Container title="My little dog – Vincent Veri">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          This is Astro
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <p>Astro is my sweet and little dog. He makes me happy every single day of my life.</p>
          <h2>Pics</h2>
          <div className="flex space-x-8">
            <a href="/static/images/astro/my-little-dog.jpg">
              <Image
                alt="Astro"
                width={400}
                quality={100}
                src={astro1}
                className="rounded-md"
              />
            </a>
            <a href="/static/images/astro/astro-2.jpg">
              <Image
                alt="Astro"
                width={400}
                quality={100}
                src={astro2}
                className="rounded-md"
              />
            </a>
            <a href="/static/images/astro/astro-3.jpg">
              <Image
                alt="Astro"
                width={400}
                quality={100}
                src={astro3}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}