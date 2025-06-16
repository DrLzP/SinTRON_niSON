
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Sintrom</h1>
      <Link
        href="/calculadoras/sintrom"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Ir a la calculadora →
      </Link>
    </main>
  )
}
