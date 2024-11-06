/* eslint-disable max-len */
interface PersonalProject {
  project: string
  desc: string
  link?: string
  github?: string
  tags: string[]
}

const projects: PersonalProject[] = [
  {
    project: 'Automated Trading System',
    desc: 'index.personal_projects.automated-trading-system',
    github: 'https://github.com/MaximeFarrugia/automated-trading-system',
    tags: ['Rust', 'Trading', 'Real Time', 'Event Driven'],
  },
  {
    project: 'fmp-rs',
    desc: 'index.personal_projects.fmp-rs',
    github: 'https://github.com/MaximeFarrugia/fmp-rs',
    tags: ['Rust', 'Library', 'Wrapper'],
  },
  {
    project: 'World Clock',
    desc: 'index.personal_projects.world_clock',
    link: 'https://clock.maxime-farrugia.com',
    github: 'https://github.com/MaximeFarrugia/World-Clock',
    tags: ['React'],
  },
]

export default projects
