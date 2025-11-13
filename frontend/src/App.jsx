import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolioData'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import './App.css'

function App() {
  const [data] = useState(portfolioData)
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
  }

  // Handle resume download/view
  const handleResumeClick = () => {
    if (data.resumeLink) {
      window.open(data.resumeLink, '_blank')
    } else {
      alert('Resume not available. Please add your resume link in portfolioData.js')
    }
  }

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        handleResumeClick={handleResumeClick}
        data={data}
      />

      <Hero data={data} scrollToSection={scrollToSection} />
      
      <main className="main-content">
        <About data={data} />
        <Projects data={data} />
         <Resume data={data} />
        <Contact data={data} />
      </main>
    </div>
  )
}

export default App