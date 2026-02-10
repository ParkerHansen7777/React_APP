import React from 'react'
import tmPic from '../../pictures/task-manager.png'
import laPic from '../../pictures/luxury-autos.png'
import ctPic from '../../pictures/chess-tracker.png'
import mPPic from '../../pictures/minecraft-pizza.png'
import wCPic from '../../pictures/wordle-clone.png'
import mlbPic from '../../pictures/mlb-stats.png'

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-card">
        <h1 className="projects-title">Projects I’ve Worked On</h1>

        <div className="grid-container projects-grid">
          <div className="project-card">
            <h2>(WIP) MLB Statistics App</h2>
            <img src={mlbPic} alt="MLB Statistics Application" />
            <a className="project-link" href="https://mlb-stats-interface.onrender.com/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <h2>Wordle Clone</h2>
            <img src={wCPic} alt="Wordle Clone" />
            <a className="project-link" href="https://wordle-clone-psi-two.vercel.app/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
          
          <div className="project-card">
            <h2>Minecraft: Pizza Mod</h2>
            <img src={mPPic} alt="Minecraft Pizza Mod" />
          </div>
          
          <div className="project-card">
            <h2>Car Dealership Catalog</h2>
            <img src={laPic} alt="Car Dealership Catalog" />
            <a className="project-link" href="https://cardealer-frontend.onrender.com/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <h2>Task Manager</h2>
            <img src={tmPic} alt="Task Manager" />
            <a className="project-link" href="https://taskmanager-frontend-8dip.onrender.com/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
          
          <div className="project-card">
            <h2>Chess Game Tracker</h2>
            <img src={ctPic} alt="Chess Game Tracker" />
            <a className="project-link" href="https://gametracker-frontend.onrender.com/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
          
        </div>

        <div className="projects-actions">
          <a className="button1" href="https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button2" href="https://www.linkedin.com/in/parkerhansen/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button3" href="https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">
            Portfolio Repo
          </a>
        </div>
      </div>
    </section>
  )
}
