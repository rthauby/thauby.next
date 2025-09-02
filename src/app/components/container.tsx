function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold uppercase pb-6">{title}</h2>
}
function Section(props: { children: React.ReactNode, id?: string }) {
  if (props.id) {
    return <section id={props.id} className="pt-24 text-3xl/10">{props.children}</section>
  }
  return <section className="pt-32 text-3xl/10">{props.children}</section>
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

export { Section, SectionTitle }