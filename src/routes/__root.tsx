import { Outlet, createRootRoute } from '@tanstack/react-router'
import { css, Global } from '@emotion/react'

import MyThemeProvider from '../components/ThemeSwitch/MyThemeProvider'

const Root = () => {
  return (
    <MyThemeProvider>
      <Global styles={globalStyle} />
      <Outlet />
    </MyThemeProvider>
  )
}
export const Route = createRootRoute({
  component: Root,
})

const globalStyle = css`
  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  #root, #__next {
    isolation: isolate;
  }
`
