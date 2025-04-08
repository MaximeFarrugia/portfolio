/* eslint-disable max-len */
interface Project {
  project: string
  desc: string
  image: string
  link?: string
}

const projects: Project[] = [
  {
    project: "Drop'in",
    desc: 'index.projects.dropin',
    image: '/res/projects/dropin.png',
    link: 'https://dropin.recipes',
  },
  {
    project: 'smsmode',
    desc: 'index.projects.smsmode',
    image: '/res/projects/smsmode.png',
    link: 'https://smsmode.com',
  },
  {
    project: 'Rofim',
    desc: 'index.projects.rofim',
    image: '/res/projects/rofim.png',
    link: 'https://rofim.fr',
  },
  {
    project: 'Transpare',
    desc: 'index.projects.transpare',
    image: '/res/projects/transpare.png',
  },
]

export default projects
