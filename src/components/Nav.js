const Nav = (props) => {

  return (
    <div id="dock-container">
      <div id="dock">
        <ul>
          <li id='avatar'>
            <span>Eric Lantz</span>
        <a href="/"><img src='https://i.imgur.com/5ynrCwa.png' alt='img'/></a>
      </li>
      <li id='projects'>
        <span>Projects</span>
        <a href="/projects"><img src="https://i.imgur.com/2K1KuWZ.png" alt='img'/></a>
      </li>
      <li id='contact'>
         <span>Contact Me</span>
         <a href="/contact"><img src="https://i.imgur.com/Y2YeP0z.png" alt='img'/></a>
      </li>
      <li id='resume'>
         <span>Resume</span>
         <a href="/resume"><img src="https://i.imgur.com/TnhHaCq.png?1" alt='img'/></a>
      </li>
   </ul>
 </div>
</div>
  )
}

export default Nav
