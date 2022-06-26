
const Nav = (props) => {

  return (
    <div id="dock-container">
      <ul id="dock">
          <li className='dock-list'>
        <span className='dock-item-title'>Eric Lantz</span>
        <a href="/"><img src='https://i.imgur.com/5ynrCwa.png' alt='img'/></a>
      </li>
      <li className='dock-list'>
        <span className='dock-item-title'>Projects</span>
        <a href="/projects"><img src="https://i.imgur.com/2K1KuWZ.png" alt='img'/></a>
      </li>
      <li className='dock-list'>
         <span className='dock-item-title'>Resume</span>
         <a href="/resume"><img src="https://i.imgur.com/TnhHaCq.png?1" alt='img'/></a>
      </li>
   </ul>
</div>
  )
}

export default Nav
