
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Stethoscope } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 p-6">
      <motion.div
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-10 max-w-lg text-center border border-zinc-200 dark:border-zinc-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-4">
          <Stethoscope className="h-12 w-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Calculadora Sintrom
        </h1>
        <p className="mb-6 text-gray-600 dark:text-zinc-300">
          Calcula fácilmente la nueva dosis total semanal y la fecha del próximo control según el INR.
        </p>
        <Link href="/calculadoras/sintrom">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
            Ir a la calculadora →
          </button>
        </Link>
      </motion.div>
    </main>
  )
}
