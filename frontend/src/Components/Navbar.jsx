import { FaDownload } from 'react-icons/fa'

function Navbar({ activeSection, scrollToSection, handleResumeClick, data }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          {data.name}
        </div>
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
           <li>
            <a 
              href="#resume" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('resume')
              }}
              className={activeSection === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
          {/* <li>
            <button 
              onClick={handleResumeClick}
              className="resume-btn"
              aria-label="View Resume"
            >
              <FaDownload style={{ marginRight: '0.5rem' }} />
              Resume
            </button>
          </li> */}
           
        </ul>
      </div>
    </nav>
  )
}

export default Navbar