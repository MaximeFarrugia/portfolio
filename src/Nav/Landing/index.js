import React, { useContext } from 'react'

import {
  PageWrapper,
  Dark,
  Light,
  ContentWrapper,
  Footer,
} from './Landing.module.css'

import { Context } from '../../App'
import classNames from '../../Common/Helpers/classNames'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
// import PersonalProjects from './PersonalProjects'

const Landing = () => {
  const { darkTheme } = useContext(Context)

  return (
    <div className={classNames([PageWrapper, darkTheme ? Dark : Light])}>
      <div className={ContentWrapper}>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <PersonalProjects /> */}
      </div>
      <div className={Footer}>
        <p>Maxime Farrugia - 2020</p>
      </div>
    </div>
  )
}

export default Landing
