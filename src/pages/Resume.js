import MenuBar from '../components/MenuBar'

const resume = () => {
  return (
    <div className='resume-page'>
      <div>
        <MenuBar />
      </div>
      <div className='resume-window'>
      <div className='resume-contents'>
        <div className='window-buttons'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
        <img className='resume-png' src='https://i.imgur.com/3EYXmS3.png' alt="Eric Lantz's Resume"/>
      </div>
      <div className='resume-windows two'>
        <div className='download-window'>
        <div className='second-window-buttons'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
        <div className='download-content'>
          Click to Download Resume!
          <a class="btn-primary btn download-resume" href="https://drive.google.com/uc?id=15x1toEniVZoa54E5qQpHw0pgqG6_uEr8&export=download" role="button">Download</a>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default resume