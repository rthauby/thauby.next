function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid grid-cols-3 gap-12">
      <div className='col-span-2 text-2xl space-y-8'>
        {children}
      </div>
    </div>
  )
}
function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold uppercase pb-6">{title}</h2>
}
function Section({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <section id={id ? id : undefined} className="pt-24 text-3xl/10">
      {children}
    </section>
  )
}

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (<>
    <div className={`${className ? className : ''} flex flex-col justify-center border-t border-gray-800`}>
      <div className="mx-auto py-16 w-full max-w-2xl xl:max-w-5xl">
        {children}
      </div>
    </div>
  </>)
}

export { Section, SectionTitle, SectionBody }