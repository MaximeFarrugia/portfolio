import '@emotion/react'

import { availableThemes } from './components/ThemeSwitch/utils'

type ThemeType = typeof availableThemes['dark']

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends ThemeType {}
}
