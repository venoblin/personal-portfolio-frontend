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
              <li>Installation and Troubleshooting</li>
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
            <ul>
              <li>Troubleshooting</li>
              <li>Configuration</li>
              <li>Routing</li>
              <li>Switching</li>
              <li>Access Points</li>
              <li>Firewalls</li>
              <li>VPNs, TCP/IP, DNS, and DHCP</li>
              <li>Network Security</li>
            </ul>
          </div>

          <div className='skill'>
            <h3>Tools</h3>
            <ul>
              <li>Windows System Tools</li>
              <li>Command Prompt and Terminal</li>
              <li>TigerVNC</li>
              <li>Oracle VirtualBox</li>
              <li>Google Workspace (Docs, Sheets, Gmail)</li>
              <li>Slack, Microsoft Teams, and Zoom</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
