import { findProjects } from '../utils'
import certifications from './certifications'
import resume from '../assets/documents/JonathanVillagomezITResume.pdf'
import techStack from './teckStack'

const foundProjects = findProjects(['tools'])

const it = {
  heading: 'IT',
  homeHeader: (
    <span className="wrapper">
      an <span className="highlight">IT Professional</span>!
    </span>
  ),
  resume: resume,
  aboutMe: (
    <p>
      Hi, I'm Jonathan, a CompTIA A+ certified IT professional. My love for
      fixing things, my natural curiosity about how things work, and my passion
      for technology led me to pursue a career in IT. Outside of IT, I enjoy
      spending time with friends and family, staying active through workouts,
      and exploring the Star Wars universe. But even in my free time, I often
      find myself tinkering with technology and learning new things. I believe
      that continuous learning is essential in the ever-evolving world of IT,
      and I'm committed to staying up-to-date with the latest trends and
      technologies.
    </p>
  ),
  projects: foundProjects,
  certifications: certifications,
  techStack: [techStack.python],
  skills: [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2 21q-.425 0-.712-.288T1 20t.288-.712T2 19h20q.425 0 .713.288T23 20t-.288.713T22 21zm2-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"></path>
        </svg>
      ),
      header: 'Hardware',
      list: [
        'Installation, Troubleshooting, and Maintenance',
        'Computers',
        'Laptops',
        'Mobile Devices',
        'Printers',
        'Servers',
        'Storage Devices',
        'Peripherals'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm4.675-5l-1.9-1.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.287t.7.287l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T6.8 16.3q-.275-.275-.275-.7t.275-.7zM13 17q-.425 0-.712-.288T12 16t.288-.712T13 15h4q.425 0 .713.288T18 16t-.288.713T17 17z"></path>
        </svg>
      ),
      header: 'Software',
      list: [
        'Installation and Troubleshooting',
        'System Configuration',
        'Windows',
        'MacOS',
        'Linux',
        'iOS',
        'Android',
        'OS Installation',
        'Malware Removal',
        'Virtualization',
        'Backup/Recovery',
        'Scripting (Bash, Python)'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.5 22q-1.45 0-2.475-1.025T2 18.5t1.025-2.475T5.5 15q.45 0 .875.112t.8.313L11 11.6V8.85q-1.1-.325-1.8-1.237T8.5 5.5q0-1.45 1.025-2.475T12 2t2.475 1.025T15.5 5.5q0 1.2-.7 2.113T13 8.85v2.75l3.85 3.825q.375-.2.788-.312T18.5 15q1.45 0 2.475 1.025T22 18.5t-1.025 2.475T18.5 22t-2.475-1.025T15 18.5q0-.45.112-.875t.313-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475T5.5 22m13-2q.625 0 1.063-.437T20 18.5t-.437-1.062T18.5 17t-1.062.438T17 18.5t.438 1.063T18.5 20M12 7q.625 0 1.063-.437T13.5 5.5t-.437-1.062T12 4t-1.062.438T10.5 5.5t.438 1.063T12 7M5.5 20q.625 0 1.063-.437T7 18.5t-.437-1.062T5.5 17t-1.062.438T4 18.5t.438 1.063T5.5 20"></path>
        </svg>
      ),
      header: 'Networking',
      list: [
        'Troubleshooting',
        'Configuration',
        'Routing',
        'Switching',
        'Access Points',
        'Firewalls',
        'VPNs, TCP/IP, DNS, and DHCP',
        'Network Security'
      ]
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 23q-.5-1-.75-2.45T6 17.6q0-2.475.55-4.088T8 11V6l3-5h.5v5.15q-.25.125-.375.35T11 7q0 .425.288.713T12 8t.713-.288T13 7q0-.275-.125-.5t-.375-.35V1h.5l3 5v5q.925.9 1.463 2.513T18 17.6q0 1.5-.25 2.95T17 23q-1.05-.325-1.675-1.187t-.6-1.963q0-.625.138-1.35T15 17.05q0-1.45-.788-3.05T12 11q-1.4 1.4-2.2 3T9 17.05q0 .725.15 1.45t.175 1.35q0 1.1-.637 1.975T7 23"></path>
        </svg>
      ),
      header: 'Tools',
      list: [
        'Windows System Tools',
        'Command Prompt and Terminal',
        'TigerVNC',
        'Oracle VirtualBox',
        'Google Workspace (Docs, Sheets, Gmail)',
        'Slack, Microsoft Teams, and Zoom'
      ]
    }
  ]
}

export default it
