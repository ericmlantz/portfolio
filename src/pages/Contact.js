import MenuBar from '../components/MenuBar'

const Contact = () => {
  return (
    <div>
     <MenuBar />
     <div className="contact-form">
     <iframe className='contact-frame' src="https://docs.google.com/forms/d/e/1FAIpQLScXWB1MjQyWImh-9O0tHQ3OFNkGR6-7r8BOtHGGIlvpOIQLIw/viewform?embedded=true" width="600" height="700" frameborder="0" marginheight="0" marginwidth="0"
     >Loading…</iframe>
    </div>
    </div>
  )
}

export default Contact