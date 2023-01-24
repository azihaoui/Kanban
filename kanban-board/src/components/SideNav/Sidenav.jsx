import React from 'react'
import './Sidenav.scss'
import {useProject} from '../../context/ProjectContex'
import { projectsData } from '../../context/projects-data'
import { useState } from 'react'

function Sidenav() {

    const {projects, currentProject, addNewProject, changeBoard} = useProject()
    const [isOpen, setIsOpen] = useState(false)

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
            <li className='create-board' 
            onClick={()=> {
              setIsOpen((currentValue) => !currentValue)
            }} 
            >
              Create new board +
              </li>

        </ul>
        {isOpen && 
            <div className='create-project'>
                <input type="text" />
                <button 
                  onClick={()=> {
                    addNewProject('hej')
              
                  }}
                >Create Project</button>
            </div>}
    </div>
  )
}

export default Sidenav