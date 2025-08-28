function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold uppercase pb-6">{title}</h2>
}
function Section(props: { children: React.ReactNode, id?: string }) {
  if (props.id) {
    return <section id={props.id} className="pt-32 text-3xl/10">{props.children}</section>
  }
  return <section className="pt-32 text-3xl/10">{props.children}</section>
}

export default function Container({ children }: { children: React.ReactNode }) {
  return (<>
    <div className="min-h-[100vh] flex flex-col justify-center border-t border-gray-800">
      <div className="mx-auto py-24 w-full max-w-2xl xl:max-w-5xl">
        {children}
      </div>
    </div>
  </>)
}

export { Section, SectionTitle }