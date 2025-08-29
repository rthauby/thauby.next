import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed z-100 w-full pointer-events-none border-b border-gray-800 bg-gray-950">
      <div className="mx-auto w-full max-w-2xl xl:max-w-5xl flex justify-between">
        <div className="hidden sm:flex py-4  text-2xl font-bold uppercase">
          <h2>Rodrigo Thauby</h2>
        </div>
        <div className="py-4 flex justify-between items-center justify-end">
          <div className="space-x-8 pointer-events-auto text-2xl">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/work" className="hover:underline">Work</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
