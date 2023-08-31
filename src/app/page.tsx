'use client'
import Head from 'next/head'
import { useEffect } from "react"

const href = "mylink://about/15"

export default function Home() {

  // useEffect(() => {
  //   const asdf = setTimeout(() => {
  //     window.location.assign("https://archlinux.org")
  //   }, 25);
  //   window.location.assign("mylink://about/12")
  //   return () => clearTimeout(asdf)
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Head>
        <meta name="apple-itunes-app" content="app-id=1595530037" key="smart-banner" />
      </Head>
      <button onClick={() => console.log('hello wolrd')}>testing</button>
    </main>
  )
}
