const resume = () => {
  return (
      <div className='resume-windows'>
      <div className='resume-contents'>
        <div className='window-buttons'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
        <div className='overflow-auto'>
          <img className='resume-png' src='https://i.imgur.com/3EYXmS3.png' alt="Eric Lantz's Resume"/>
        </div>
        </div>
      <div className='download-content'>
        <div className='window-buttons'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
      <div className='download-png'>
          <p className='download-button-text'>Click to Download Resume!</p>
          <a class="btn-primary btn download-resume" href="https://drive.google.com/uc?id=15x1toEniVZoa54E5qQpHw0pgqG6_uEr8&export=download" role="button">Download</a>
      </div>
    </div>
  </div>
  )
}

export default resume