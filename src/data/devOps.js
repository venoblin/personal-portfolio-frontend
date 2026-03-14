import { findProjects } from '../utils'
import resume from '../assets/documents/JonathanVillagomezDevOpsResume.pdf'
import techStack from './teckStack'
import certifications from './certifications'

const foundProjects = findProjects(['tools'])

const swe = {
  heading: 'DevOps',
  homeHeader: (
    <span className="wrapper">
      a <span className="highlight">DevOps Engineer</span>!
    </span>
  ),
  resume: resume,
  aboutMe: (
    <p>
      Hi, I'm Jonathan. I'm a DevOps Engineer who thrives on bridging the gap
      between physical infrastructure and software automation. My journey into
      tech started with a natural curiosity for how systems work, leading me
      from managing Tier IV data center hardware to writing the code that
      automates it. Today, I specialize in Linux, Python, and containerization,
      focusing on eliminating manual toil and building highly reliable
      environments. When I step away from my homelab, I stay active through
      fitness and boxing, catch up on Star Wars lore, or play video games. I
      believe the best engineers are lifelong learners, and I’m always looking
      for the next operational bottleneck to optimize.
    </p>
  ),
  projects: foundProjects,
  certifications: certifications,
  techStack: [
    techStack.python,
    techStack.bash,
    techStack.powerShell,
    techStack.sql
  ],
  skills: [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.444 20.246L6.533 14.36q-.074-.081-.11-.175q-.036-.095-.036-.186q0-.182.13-.34q.131-.159.361-.159q.103 0 .199.037t.17.11l5.91 5.91q.174.193.443.184q.27-.01.442-.183l5.308-5.308h-2.812q-.212 0-.356-.144t-.143-.357t.143-.356t.357-.143h3.692q.343 0 .575.232t.233.576v3.692q0 .213-.145.356t-.356.144t-.356-.144t-.143-.356v-2.812l-5.308 5.308q-.221.22-.513.34t-.614.12q-.302 0-.608-.12q-.307-.12-.552-.34M3.77 10.731q-.343 0-.575-.232t-.232-.576V6.231q0-.213.144-.356t.356-.144t.356.144t.144.356v2.811L9.27 3.735q.243-.24.547-.35t.608-.11q.324 0 .617.11t.515.35l5.911 5.886q.074.081.11.175t.036.186q0 .182-.13.34q-.131.159-.362.159q-.102 0-.198-.037t-.17-.11l-5.91-5.911q-.174-.192-.443-.182q-.27.009-.442.182L4.65 9.731h2.812q.212 0 .356.144t.144.357t-.144.356t-.356.143z"></path>
        </svg>
      ),
      header: 'DevOps & Automation',
      list: ['CI/CD', 'Docker', 'Infrastructure Automation, Cron']
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm4.675-5l-1.9-1.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.287t.7.287l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T6.8 16.3q-.275-.275-.275-.7t.275-.7zM13 17q-.425 0-.712-.288T12 16t.288-.712T13 15h4q.425 0 .713.288T18 16t-.288.713T17 17z"></path>
        </svg>
      ),
      header: 'Infrastructure & OS',
      list: ['Linux (Debian/RHEL)', 'Virtualization (VirtualBox/KVM)']
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.5 22q-1.45 0-2.475-1.025T2 18.5t1.025-2.475T5.5 15q.45 0 .875.112t.8.313L11 11.6V8.85q-1.1-.325-1.8-1.237T8.5 5.5q0-1.45 1.025-2.475T12 2t2.475 1.025T15.5 5.5q0 1.2-.7 2.113T13 8.85v2.75l3.85 3.825q.375-.2.788-.312T18.5 15q1.45 0 2.475 1.025T22 18.5t-1.025 2.475T18.5 22t-2.475-1.025T15 18.5q0-.45.112-.875t.313-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475T5.5 22m13-2q.625 0 1.063-.437T20 18.5t-.437-1.062T18.5 17t-1.062.438T17 18.5t.438 1.063T18.5 20M12 7q.625 0 1.063-.437T13.5 5.5t-.437-1.062T12 4t-1.062.438T10.5 5.5t.438 1.063T12 7M5.5 20q.625 0 1.063-.437T7 18.5t-.437-1.062T5.5 17t-1.062.438T4 18.5t.438 1.063T5.5 20"></path>
        </svg>
      ),
      header: 'Networking',
      list: [
        'Apache, Nginx',
        'RESTful APIs',
        'WireGuard',
        'TCP/IP, DNS, DHCP, VPN (WireGuard)'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 23q-.5-1-.75-2.45T6 17.6q0-2.475.55-4.088T8 11V6l3-5h.5v5.15q-.25.125-.375.35T11 7q0 .425.288.713T12 8t.713-.288T13 7q0-.275-.125-.5t-.375-.35V1h.5l3 5v5q.925.9 1.463 2.513T18 17.6q0 1.5-.25 2.95T17 23q-1.05-.325-1.675-1.187t-.6-1.963q0-.625.138-1.35T15 17.05q0-1.45-.788-3.05T12 11q-1.4 1.4-2.2 3T9 17.05q0 .725.15 1.45t.175 1.35q0 1.1-.637 1.975T7 23"></path>
        </svg>
      ),
      header: 'Tools & Productivity',
      list: [
        'Git/GitHub',
        'ServiceNow, Jira',
        'Microsoft Office, Google Workspace',
        'Microsoft Teams, Zoom, Slack'
      ]
    }
  ]
}

export default swe
