import '../../styles/Skills.css'
import skills from '../../skills';

const Skills = () => {

  return (
    <section className="Skills" id='skills'>

      <div className='wrapper'>
        <h2>Skills</h2>
        
        <div className='all-skills'>
          <div className='skill'>
            <h3>Hardware</h3>
            <p>Installation, troubleshooting, maintenance, computers, laptops, mobile devices, printers, servers, 
              storage devices, peripherals</p>
          </div>
          
          <div className='skill'>
            <h3>Software</h3>
            <p>
              Troubleshooting, system configuration, Windows, MacOS, Linux, iOS, Android, OS installation, malware
            removal, virtualization, backup/recovery, scripting (Bash, Python)</p>
          </div>

          <div className='skill'>
            <h3>Networking</h3>
            <p>Configuration, routing, switching, access points, firewalls, VPNs, TCP/IP, DNS, DHCP, network security,
            troubleshooting</p>
          </div>

          <div className='skill'>
            <h3>Tools</h3>
            <p>Windows System Tools, Command Prompt, Terminal, TigerVNC, Oracle VirtualBox, Google Workspace (Docs,
              Sheets, Gmail), Slack, Microsoft Teams, Zoom</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
