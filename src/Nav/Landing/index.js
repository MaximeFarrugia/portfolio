import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import {
  PageWrapper,
  Dark,
  Light,
  ContentWrapper,
  Footer,
  GotoTop,
} from './Landing.module.css'

import { Context } from '../../App'
import classNames from '../../Common/Helpers/classNames'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
// import PersonalProjects from './PersonalProjects'
import SchoolProjects from './SchoolProjects'
import FixedLinks from './FixedLinks'
import { ReactComponent as UpHand } from './upHand.svg'

const Landing = () => {
  const { darkTheme } = useContext(Context)
  const [gotoTop, setGotoTop] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > window.innerHeight && !gotoTop) {
      setGotoTop(true)
    } else if (gotoTop && window.scrollY < window.innerHeight) {
      setGotoTop(false)
    }
  }, [gotoTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className={classNames([PageWrapper, darkTheme ? Dark : Light])}>
      <div className={ContentWrapper}>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <PersonalProjects /> */}
        <SchoolProjects />
      </div>
      <div className={Footer}>
        <FixedLinks />
        <p>Maxime Farrugia - 2020</p>
      </div>
      {gotoTop && (
        <UpHand
          className={GotoTop}
          onClick={() => {
            window.scrollTo(0, 0)
            setGotoTop(false)
          }}
        />
      )}
    </div>
  )
}

export default Landing
