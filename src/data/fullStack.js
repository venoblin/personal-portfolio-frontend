import { findProjects } from '../utils'
import techStack from './teckStack'

const foundProjects = findProjects(['web', 'tools'])

const fullStack = {
  heading: 'Dev',
  homeHeader: (
    <span className="wrapper">
      a <span className="highlight">Full-Stack Developer</span>!
    </span>
  ),
  resume:
    'https://docs.google.com/document/d/1LJ5ZV9VbhKUoe1wu2OvBS6wC2p95eo7ZkLAyZJDVuBU/edit?usp=sharing',
  aboutMe: (
    <p>
      Hi, I'm Jonathan. I’m a Full-Stack Developer who loves building scalable
      applications and solving complex operational problems. My journey into
      tech is a bit unconventional—my natural curiosity for how things work led
      me from hands-on facility operations to managing Tier IV data center
      infrastructure, and ultimately to architecting full-stack web apps. Today,
      I specialize in React, Node.js, and Python, building tools that bridge the
      gap between physical hardware and efficient code. When I’m away from the
      keyboard, you can usually find me getting a workout in, catching up on the
      Star Wars universe, or playing video games. I’m a lifelong learner, always
      tinkering with my homelab and looking for the next challenge to solve.
    </p>
  ),
  projects: foundProjects,
  certifications: null,
  techStack: [...Object.values(techStack).map((v) => v)],
  skills: null
}

export default fullStack
