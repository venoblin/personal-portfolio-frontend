import flixderPng from '../assets/images/project-screenshots/flixder.png'
import fitBuddyPng from '../assets/images/project-screenshots/fit-buddy.png'
import ticTacToePng from '../assets/images/project-screenshots/tic-tac-toe.png'
import webScraperPng from '../assets/images/project-screenshots/web-scraper.png'
import teamHubPng from '../assets/images/project-screenshots/team-hub.png'
import hoverOrbPng from '../assets/images/project-screenshots/hover-orb.png'
import downloadFileSorterPng from '../assets/images/project-screenshots/download-file-sorter.png'
import scriptsPng from '../assets/images/project-screenshots/scripts.png'
import ficPng from '../assets/images/project-screenshots/fic.png'

const projects = [
  {
    title: 'TeamHub',
    types: ['web'],
    image: teamHubPng,
    demo: 'https://teamhubweb.netlify.app',
    repo: 'https://github.com/venoblin/teamhub-frontend',
    techs: [
      'React',
      'TypeScript',
      'SCSS',
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy'
    ],
    desc: 'Web application that allows you to organize your projects and most importantly your workflow.'
  },
  {
    title: 'Flixder',
    types: ['web'],
    image: flixderPng,
    demo: 'https://flixder.netlify.app/',
    repo: 'https://github.com/venoblin/flixder-frontend',
    techs: ['React', 'JavaScript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    desc: 'Dating application for movies, gives you a way to find new movies to watch.'
  },
  {
    title: 'HoverOrb',
    types: ['game'],
    image: hoverOrbPng,
    demo: '',
    repo: 'https://github.com/venoblin/hover-orb',
    techs: ['Java', 'LibGDX'],
    desc: 'Mobile game where the goal is to keep the ball airbourne without it touching the floor.'
  },
  {
    title: 'Fit Buddy',
    types: ['web'],
    image: fitBuddyPng,
    demo: 'https://fitbuddyapp.netlify.app/',
    repo: 'https://github.com/venoblin/fit-buddy',
    techs: ['Vue', 'JavaScript', 'SCSS'],
    desc: 'An application used to set up your workout routine for the week.'
  },
  {
    title: 'Tic-Tac-Toe',
    types: ['game'],
    image: ticTacToePng,
    demo: 'http://tic-tac-toe-jvh.surge.sh/',
    repo: 'https://github.com/venoblin/tic-tac-toe',
    techs: ['JavaScript', 'CSS'],
    desc: 'Tic-Tac-Toe game made entirely with JavaScript.'
  },
  {
    title: 'File Integrity Checker',
    types: ['tools'],
    image: ficPng,
    demo: '',
    repo: 'https://github.com/venoblin/file-integrity-checker',
    techs: ['Python', 'SQLite'],
    desc: 'A lightweight security tool that monitors file systems for unauthorized changes by comparing SHA256 file hashes against a local SQLite baseline.'
  },
  {
    title: 'Scripts',
    types: ['tools'],
    image: scriptsPng,
    demo: '',
    repo: 'https://github.com/venoblin/scripts',
    techs: ['Bash', 'Python'],
    desc: 'Collection of utility scripts designed to streamline common tasks in a Linux environment.'
  },
  {
    title: 'Download File Sorter',
    types: ['tools'],
    image: downloadFileSorterPng,
    demo: '',
    repo: 'https://github.com/venoblin/download-file-sorter',
    techs: ['Python'],
    desc: 'Sorts files from download directory into user specified directories in a Linux based system.'
  },
  {
    title: 'Web Scraper',
    types: ['tools'],
    image: webScraperPng,
    demo: '',
    repo: 'https://github.com/venoblin/web-scraper',
    techs: ['Python', 'Selenium', 'BeautifulSoup'],
    desc: 'Web scraper that returns the data in an organized manner.'
  }
]

export default projects
