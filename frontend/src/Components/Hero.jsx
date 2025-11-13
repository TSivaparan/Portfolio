import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

function Hero({ data, scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-greeting">
            Hey, I'm <span className="name">{data.name}.</span>
          </h1>
          <p className="hero-description">
            {data.tagline}
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
            className="hero-cta"
          >
            Work with Me
            <span>→</span>
          </a>
          <div className="hero-social-links">
            <a 
              href={`https://${data.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={`https://${data.contact.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={`mailto:${data.contact.email}`}
              className="hero-social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img 
              src={data.profileImage} 
              alt={data.name}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero