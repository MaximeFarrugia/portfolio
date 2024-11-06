import { createLazyFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'

import UpHand from './-res/UpHand'
import Header from './-Header'
import About from './-About'
import Skills from './-Skills'
import Experience from './-Experience'
import Projects from './-Projects'
import PersonalProjects from './-PersonalProjects'
import SchoolProjects from './-SchoolProjects'
import FixedLinks from './-FixedLinks'

const Index = () => {
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
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <PersonalProjects />
        <SchoolProjects />
      </ContentWrapper>
      <Footer>
        <FixedLinks />
        <p>{`Maxime Farrugia - ${new Date().getFullYear()}`}</p>
      </Footer>
      {gotoTop && (
        <GotoTop
          onClick={() => {
            window.scrollTo(0, 0)
            setGotoTop(false)
          }}
        />
      )}
    </PageWrapper>
  )
}

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.background};
`

const ContentWrapper = styled.div`
  max-width: 1040px;
`

const Footer = styled.div`
  width: 100vh;
  display: flex;
  justify-content: center;
  margin: 75px 0 30px 0;

  & > p {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.primary};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

const GotoTop = styled(UpHand)`
  position: fixed;
  bottom: 15px;
  right: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: 0.2s ease-in-out;

  &:hover {
    bottom: 25px;
  }
`
