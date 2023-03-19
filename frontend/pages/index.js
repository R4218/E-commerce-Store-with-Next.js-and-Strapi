import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Strapi E-commerce Store with Next.js</title>
        <meta name="description" content="E-commerce Store with Next.js and Strapi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main>
        
      </main>
        <h2>MY Shop</h2>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}
