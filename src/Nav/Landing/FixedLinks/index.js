import React, { useContext } from 'react'
import { string } from 'prop-types'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import {
  Wrapper,
  Dark,
  Light,
  Rode,
} from './FixedLinks.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'

const FixedLinks = ({ className }) => {
  const { darkTheme } = useContext(Context)

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
      <a
        href="https://github.com/MaximeFarrugia"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/maxime-farrugia-881365178/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <div className={Rode} />
    </div>
  )
}

FixedLinks.propTypes = {
  className: string,
}

FixedLinks.defaultProps = {
  className: '',
}

export default FixedLinks
