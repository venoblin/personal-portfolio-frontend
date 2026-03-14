import { findProjects } from '../utils'
import resume from '../assets/documents/JonathanVillagomezSysAdminResume.pdf'
import techStack from './teckStack'
import certifications from './certifications'

const foundProjects = findProjects(['tools'])

const sysAdmin = {
  heading: 'SysAdmin',
  homeHeader: (
    <span className="wrapper">
      a <span className="highlight">System Administrator</span>!
    </span>
  ),
  resume: resume,
  aboutMe: (
    <p>
      Hi, I'm Jonathan. I'm a System Administrator who specializes in keeping
      enterprise environments secure, optimized, and online. My journey in IT
      began with a natural curiosity for how physical systems operate, which led
      me from hands-on facility operations to managing Tier IV data center
      infrastructure. Today, I leverage my deep hardware knowledge and
      Linux/Python scripting skills to maintain high-availability servers and
      automate routine maintenance. When I’m away from the terminal, you can
      usually find me getting a workout in, watching a boxing match, catching up
      on Star Wars lore, or playing video games. I’m a lifelong learner, always
      tinkering with my self-hosted homelab and looking for the next
      infrastructure challenge to solve.
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
          <path d="M6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19z"></path>
        </svg>
      ),
      header: 'Infrastructure & Cloud',
      list: [
        'Linux (Debian/RHEL)',
        'AWS (EC2/S3)',
        'Docker',
        'Apache/Nginx',
        'Virtualization',
        'TCP/IP, DNS, DHCP, VPN (WireGuard)'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.616 21q-1.085 0-1.85-.766Q5 19.47 5 18.385V6q0-1.258.871-2.129T8 3h11v13.77q-.663 0-1.14.475t-.475 1.14t.476 1.139T19 20v1zm.769-5.23h1V4h-1zM7.615 20h9.364q-.285-.33-.44-.732q-.155-.4-.155-.884q0-.457.152-.87t.443-.745H7.616q-.689 0-1.152.476T6 18.385q0 .688.464 1.151T7.616 20"></path>
        </svg>
      ),
      header: 'Methodologies & Observability',
      list: [
        'ITIL Framework',
        'Incident Management',
        'System Monitoring',
        'CI/CD',
        'RESTful APIs'
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

export default sysAdmin
