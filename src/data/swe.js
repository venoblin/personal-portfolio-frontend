import { findProjects } from '../utils'
import techStack from './teckStack'

const foundProjects = findProjects(['web', 'tools', 'game'])

const swe = {
  heading: 'Dev',
  homeHeader: (
    <span className="wrapper">
      a <span className="highlight">Software Engineer</span>!
    </span>
  ),
  resume:
    'https://docs.google.com/document/d/1Hpj4aOHzjeQRXKVrDnCPxP1uS-ZMuBrbcdMG_wlaSHs/edit?usp=sharing',
  aboutMe: (
    <p>
      Hi, I'm Jonathan. I am a Software Engineer who loves building scalable
      applications and solving complex operational problems. My journey into
      tech is a bit unconventional—my natural curiosity for how things work led
      me from hands-on facility operations to managing Tier IV data center
      infrastructure, and ultimately to architecting high-performance software.
      Today, I specialize in Python, React, and Node.js, building tools that
      bridge the gap between physical hardware and efficient code. When I’m away
      from the keyboard, you can usually find me getting a workout in, catching
      a boxing match, exploring the Star Wars universe, or playing video games.
      I’m a lifelong learner, always tinkering with my homelab and looking for
      the next engineering challenge to solve.
    </p>
  ),
  projects: foundProjects,
  certifications: null,
  techStack: [...Object.values(techStack).map((v) => v)],
  skills: null
}

export default swe
