import React from 'react'

export default function Landing() {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1>
          Hello, I’m <span className="highlight">Parker Hansen</span>
        </h1>

        <h2 className="subtitle">
          Software Developer
        </h2>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  )
}