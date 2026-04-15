import { findProjects } from '../utils'
import techStack from './teckStack'
import certifications from './certifications'

const foundProjects = findProjects(['tools'])

const infra = {
  heading: 'Infra',
  homeHeader: (
    <span className="wrapper">
      an <span className="highlight">Infrastructure Engineer</span>!
    </span>
  ),
  resume:
    'https://docs.google.com/document/d/1Ql6e23LARgQM37_v5p3YNu2-P30AFbd9W0ROOqUWh-g/edit?usp=sharing',
  aboutMe: (
    <p>
      Hi, I'm Jonathan. I'm a Infrastructure Engineer who specializes in keeping
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
    techStack.sql,
    techStack.javaScript
  ],
  skills: [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19z"></path>
        </svg>
      ),
      header: 'Infrastructure & OS',
      list: [
        'Linux (Debian/RHEL)',
        'Windows',
        'AWS (EC2/S3)',
        'Docker',
        'Virtualization (VirtualBox/KVM)',
        'Cron'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.5 22q-1.45 0-2.475-1.025T2 18.5t1.025-2.475T5.5 15q.45 0 .875.112t.8.313L11 11.6V8.85q-1.1-.325-1.8-1.237T8.5 5.5q0-1.45 1.025-2.475T12 2t2.475 1.025T15.5 5.5q0 1.2-.7 2.113T13 8.85v2.75l3.85 3.825q.375-.2.788-.312T18.5 15q1.45 0 2.475 1.025T22 18.5t-1.025 2.475T18.5 22t-2.475-1.025T15 18.5q0-.45.112-.875t.313-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475T5.5 22m13-2q.625 0 1.063-.437T20 18.5t-.437-1.062T18.5 17t-1.062.438T17 18.5t.438 1.063T18.5 20M12 7q.625 0 1.063-.437T13.5 5.5t-.437-1.062T12 4t-1.062.438T10.5 5.5t.438 1.063T12 7M5.5 20q.625 0 1.063-.437T7 18.5t-.437-1.062T5.5 17t-1.062.438T4 18.5t.438 1.063T5.5 20"></path>
        </svg>
      ),
      header: 'Networking & Web',
      list: ['TCP/IP, DNS, DHCP, VPN (WireGuard)', 'Apache, Nginx', 'REST APIs']
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.616 21q-1.085 0-1.85-.766Q5 19.47 5 18.385V6q0-1.258.871-2.129T8 3h11v13.77q-.663 0-1.14.475t-.475 1.14t.476 1.139T19 20v1zm.769-5.23h1V4h-1zM7.615 20h9.364q-.285-.33-.44-.732q-.155-.4-.155-.884q0-.457.152-.87t.443-.745H7.616q-.689 0-1.152.476T6 18.385q0 .688.464 1.151T7.616 20"></path>
        </svg>
      ),
      header: 'Tools & Methodologies',
      list: [
        'ServiceNow, Jira',
        'Git/GitHub',
        'ITIL Framework',
        'Incident Management',
        'System Monitoring'
      ]
    }
  ]
}

export default infra
