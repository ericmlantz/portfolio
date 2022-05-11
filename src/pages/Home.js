
const Home = () => {

  return (
    <div>
      <main className='wrapper'>
        <div className='download-content-home'>
          <div className='window-buttons-home'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
          </div>
        </div>
        <section className='sec1'>
          <img className='aboutme-img' src='https://i.imgur.com/uQS5RJW.png' alt="Eric's Profile"/>
        </section>
        <section className='sec2'>
          <p className='about-title'><b>Eric</b> Lantz</p>
          <p className='about-role'><b>Role:</b> Full Stack Software Developer</p>
          <p><b>Location:</b> Atlanta, GA</p>
          <p><b>Age:</b> 27 years old</p>
        </section>
      </main>
    </div>
  )
}

export default Home