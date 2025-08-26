export default function NavBar() {
  return (
    <nav className="fixed w-full pointer-events-none border-b border-blue-950">
      <div className="mx-auto w-full max-w-2xl xl:max-w-5xl">
        <div className="p-4 flex justify-between items-center justify-end">
          <div className="space-x-8 pointer-events-auto text-2xl">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Me</a>
          </div>
        </div>
      </div>
    </nav>
  )
}