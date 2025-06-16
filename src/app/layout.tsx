
import "./globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Calculadora Sintrom",
  description: "Calculadora de dosis y control de Sintrom",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
