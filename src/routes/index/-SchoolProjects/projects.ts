/* eslint-disable max-len */
interface SchoolProject {
  project: string
  desc: string
  link: string
  tags: string[]
}

const projects: SchoolProject[] = [
  {
    project: 'Corewar',
    desc: 'index.school_projects.corewar',
    link: 'https://github.com/MaximeFarrugia/CPE_Corewar_2018',
    tags: ['C', 'Assembly', 'Game', 'Memory'],
  },
  {
    project: 'Zappy',
    desc: 'index.school_projects.zappy',
    link: 'https://github.com/MaximeFarrugia/PSU_zappy_2019',
    tags: ['C', 'Python', 'Unity', 'IA', 'Game', 'Network'],
  },
  {
    project: 'AREA',
    desc: 'index.school_projects.area',
    link: 'https://github.com/MaximeFarrugia/AREA',
    tags: ['React', 'NodeJS', 'Express', 'MongoDB', 'API', 'WebHooks'],
  },
  {
    project: 'Hackaton Jaguar Network',
    desc: 'index.school_projects.jaguar',
    link: 'https://community.jaguar-network.com/sprintoneweek-epitech-medinsoft-jaguar-network-3-projets-primes/',
    tags: ['React', 'Prisma', 'GraphQL', 'GMAO'],
  },
]

export default projects
