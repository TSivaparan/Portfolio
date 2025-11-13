function About({ data }) {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>{data.about}</p>
      
      <div className="skills">
        <h3>Skills & Technologies</h3>
        <div className="skills-container">
          {data.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About