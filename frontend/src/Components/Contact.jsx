import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Replace these with your actual IDs from EmailJS
      await emailjs.send(
        'service_rv7oeuk',      // Replace: service_abc123[service id]
        'template_d3yy2uf',     // Replace: template_xyz789[template id]
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'px40FyBP-JHm0OnBF'       // Replace: abcXYZ123_def456[publickey]
      )
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      })
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setFormStatus({ type: '', message: '' })
      }, 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please email me directly at ' + data.contact.email
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">
                    <a href={`mailto:${data.contact.email}`}>
                      {data.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaPhone />
                </div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">
                    <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`}>
                      {data.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {data.contact.location && (
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-item-content">
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">
                      {data.contact.location}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="social-links">
              <a 
                href={`https://${data.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`https://${data.contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div> */}
          </div>

          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {formStatus.message && (
                <div className={`form-message ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact