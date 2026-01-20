import React from 'react'
import profile from '../../pictures/linkedinPfp.jpg'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="container-row about-layout">
          <img
            id="about-me-pic"
            src={profile}
            alt="Parker Hansen"
          />

          <div id="about-me-text">
            <h1>About Me</h1>
            <p>
              I'm a software developer based in Los Angeles, California.
              I have experience with languages and frameworks such as C,
              C++, Python, JavaScript, Java, React.js, Node.js, and SQL.
              <br /><br />
              I’m currently freelancing and training AI with a focus on
              software development. I’ve built multiple projects with
              React, including MERN stack applications, and even
              developed a Minecraft mod using Java.
              <br /><br />
              I love problem-solving, building things, and breaking
              complex challenges into small pieces that bring a bigger
              vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}