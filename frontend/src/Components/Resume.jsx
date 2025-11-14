import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa'
function Resume({ data }) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = data.resumeLink
    link.download = 'Thanendran_Sivaparan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    window.open(data.resumeLink, '_blank')
  }

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      
      <div className="resume-container-center">
        {/* Resume Preview Card */}
        <div className="resume-preview-card">
          <div className="resume-icon">
            <FaFileAlt />
          </div>
          <h3>View My Professional Resume</h3>
          <p>Download or preview my complete resume with detailed information about my experience, education, and skills.</p>
          
          <div className="resume-buttons">
            <button onClick={handleDownload} className="resume-download-btn">
              <FaDownload />
              Download Resume
            </button>
            <button onClick={handleView} className="resume-view-btn">
              <FaEye />
              View Online
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume