import Link from "next/link"
export default function Footer() {
  return (<>
    <footer>
      <div className="flex flex-col justify-center border-t border-gray-800">
        <div className="mx-auto py-14 w-full max-w-2xl xl:max-w-5xl">
          {(new Date().getFullYear())} Rodrigo Thauby. Carlisle, PA <Link target="_blank" href="https://www.google.com/maps/place/Carlisle,+PA" style={{
            display: 'inline-block',
            position: 'absolute',
            transform: 'translate(0px, -2px)',
            rotate: '30deg',
          }}>&#128205;</Link>
        </div>
      </div>
    </footer>
  </>)
}