import * as React from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';

const MenuBar = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    }
  }));
  return (
    <div className='whole-menu-bar'>
    <header className='menu-bar'>
      <section className='menu-bar'>
        <a className='mb-item' href='/'><b>Eric Lantz</b></a>
      </section>
      <section className='menu-bar socials'>

      <a variant='contained' target="_blank" href='mailto:ericmlantz@gmail.com'>
      <LightTooltip
      title="Email Me"
      TransitionComponent={Zoom}
      arrow
      >
        <i className="bi bi-envelope-fill mb-social"></i>
      </LightTooltip>
      </a>

      <LightTooltip
        title="Social Links"
        arrow
        TransitionComponent={Zoom}
      >
        <div>
        <a target="_blank" href='https://www.linkedin.com/in/eric-lantz/'> 
          <i className="bi bi-linkedin mb-social"></i>
        </a>
        <a target="_blank" href='https://github.com/ericmlantz'>
          <i className="bi bi-github mb-social right-most"></i>
        </a>
        </div>
      </LightTooltip>
      </section>
    </header>
    </div>
  )
}

export default MenuBar