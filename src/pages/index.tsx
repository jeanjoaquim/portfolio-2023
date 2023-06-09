import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'] ,
  variable: '--font-roboto'
})

export default function Home() {
  return (
    <>
      <main className={`${roboto.className}`}>
        <Header />
        <Hero />
      </main>
    </>
  )
}
