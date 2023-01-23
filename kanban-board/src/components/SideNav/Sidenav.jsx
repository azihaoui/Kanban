import React from 'react'
import './Sidenav.scss'
import {useProject} from '../../context/ProjectContex'
import { projectsData } from '../../context/projects-data'

function Sidenav() {

    const {projects} = useProject()

  return (
    <div className='sidenav'>
        <p>ALL BOARDS (2)</p>
        <ul>
            {projectsData.map((project) => (
              <li key={project.id}>{project.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sidenav