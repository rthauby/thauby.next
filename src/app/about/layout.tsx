export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <div className="mx-auto px-8 w-full max-w-2xl xl:max-w-5xl pt-24">
      {children}
    </div>
  </>
}