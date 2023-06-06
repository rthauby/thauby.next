const MiniHeader = (props: { 
    title: string 
  }) => {
  return (
    <div className='miniHeader'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='mx-12 text-center py-8'>
          <h2 className='font-semibold text-2xl'>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MiniHeader