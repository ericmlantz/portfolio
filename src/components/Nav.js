const Nav = (props) => {

  return (
    <div id="dock-container">
      <div id="dock">
        <ul>
          <li>
            <span>Eric Lantz</span>
        <a href="/"><img src='https://i.imgur.com/5ynrCwa.png' alt='img'/></a>
      </li>
      <li>
        <span>Projects</span>
        <a href="/projects"><img src="https://i.imgur.com/2K1KuWZ.png"/></a>
      </li>
      <li>
         <span>Contact Me</span>
         <a href="/contact"><img src="https://i.imgur.com/Y2YeP0z.png"/></a>
      </li>
      <li>
         <span>Resume</span>
         <a href="/resume"><img src="https://i.imgur.com/W0fo57K.png"/></a>
      </li>
   </ul>
 </div>
</div>
  )
}

export default Nav
