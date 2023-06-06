const MiniHero = (props: { 
    url: string,
  }) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='mx-12 text-center pt-12'>
            <div className='miniHero' style={{'backgroundImage' : `url(${props.url})`}} />
        </div>
    </div>
  )
}

export default MiniHero