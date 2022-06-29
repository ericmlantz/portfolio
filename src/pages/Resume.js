import Eric_Lantz_Resume from '../'

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
          {/* Link updated on Jun 29th, 2022 */}
        <iframe className='iframe-resume' src="https://drive.google.com/file/d/130_WhRoDZPiPWsLwOlQ8LSlencaKPqb2/preview?usp=embed_googleplus"></iframe>
        {/* https://drive.google.com/file/d/1doUvvB-4S7tVMyYJZOvumgUBv5wbPYtl/preview?usp=embed_googleplus" */}
        </div>
        </div>
        <div className='download-wrapper'>
      <div className='download-content'>
        <div className='window-buttons'>
          <div className='circle red'></div>
          <div className='circle yellow'></div>
          <div className='circle green'></div>
        </div>
      <div className='download-png'>
          <p className='download-button-text'>Click to Download Resume!</p>
          {/* Link updated on Jun 29th, 2022 */}
          <a className="btn-primary btn download-resume" href='https://drive.google.com/uc?id=130_WhRoDZPiPWsLwOlQ8LSlencaKPqb2&export=download' role="button">Download</a>
      </div>
    </div>
    </div>
  </div>
  )
}

export default resume