import '../../styles/Skills.css'

const Skills = () => {

  return (
    <section className="Skills" id='skills'>

      <div className='wrapper'>
        <h2>Skills</h2>
        
        <div className='all-skills'>
          <div className='skill'>
            <h3>Hardware</h3>
            <ul>
              <li>Installation, Troubleshooting, and Maintenance</li>
              <li>Computers</li>
              <li>Laptops</li>
              <li>Mobile Devices</li>
              <li>Printers</li>
              <li>Servers</li>
              <li>Storage Devices</li>
              <li>Peripherals</li>
            </ul>
          </div>
          
          <div className='skill'>
            <h3>Software</h3>
            <ul>
              <li>Troubleshooting</li>
              <li>System Configuration</li>
              <li>Windows</li>
              <li>MacOS</li>
              <li>Linux</li>
              <li>iOS</li>
              <li>Android</li>
              <li>OS Installation</li>
              <li>Malware Removal</li>
              <li>Virtualization</li>
              <li>Backup/Recovery</li>
              <li>Scripting (Bash, Python)</li>
            </ul>
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
