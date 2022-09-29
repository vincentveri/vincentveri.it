import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/vincentveri.jpg';
import avatarColor from 'public/vincentveri-color.jpg';

export default function Setup() {
  return (
    <Container title="About – Vincent Veri">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My gear
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h3>Coding</h3>
          <ul>
            <li>Editor: VSCode</li>
            <li>PyCharm</li>
            <li>Shell: bash</li>
          </ul>
          <h3>Photo / Video</h3>
          <ul>
            <li>Canon 5D Mark III</li>
            <li>Canon 6D Mark I</li>
            <li>Canon EF 70-200mm f/2.8L USM</li>
            <li>Canon EF 85mm f/1.8 USM</li>
            <li>Canon EF 24mm f/2.8 USM</li>
            <li>Canon EF 50mm f/1.8</li>
            <li>Helios 44-2 58mm</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}