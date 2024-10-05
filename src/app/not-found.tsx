import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center p-5">
      <h1 className="text-3xl font-bold mb-2">
        Pagina no encontrada :(
      </h1>
      <Link href={"/"} className="text-blue-400 hover:text-blue-300 transition">
        Regresar para ver mas informacion
      </Link>
    </main>
  )
}
