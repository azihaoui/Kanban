import React from 'react'
import './Sidenav.scss'
import {useProject} from '../../context/ProjectContex'
import { projectsData } from '../../context/projects-data'

function Sidenav() {

    const {projects, currentProject, changeBoard} = useProject()
    console.log(projects)

  return (
    <div className='sidenav'>
        <p>ALL BOARDS (2)</p>
        <ul>
            {projectsData.map((project, index) => (
              <li 
              onClick={()=> {
                changeBoard(index)
              }}
              key={project.id} className={currentProject.id === project.id && 'active'}
              >
                {project.title}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidenav