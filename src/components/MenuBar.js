import React from 'react'

const MenuBar = () => {
  return (
    <div className='whole-menu-bar'>
    <header className='menu-bar'>
      <section className='menu-bar'>
        <a className='mb-item' href='/'><b>Eric Lantz</b></a>
        <p className='mb-item'>Edit</p>
        <p className='mb-item'>View</p>
      </section>
      <section className='menu-bar socials'>
        <a target="_blank" href='mailto:ericmlantz@gmail.com'>
          <i className="bi bi-envelope-fill mb-social"></i>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/eric-lantz/'> 
          <i className="bi bi-linkedin mb-social"></i>
        </a>
        <a target="_blank" href='https://github.com/ericmlantz'>
          <i className="bi bi-github mb-social right-most"></i>
        </a>
      </section>
    </header>
    </div>
  )
}

export default MenuBar