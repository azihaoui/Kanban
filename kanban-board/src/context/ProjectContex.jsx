import React, {useState, useContext, createContext} from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}

const ProjectProvider = ({children}) => {
    const [projects, setProjects] = useState(projectsData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentProject = projects[currentIndex]
console.log('hej')
console.log(children)
    function changeBoard(index) {
        setCurrentIndex(index)
    }

    function addNewProject (title) {
        if (!title) return

    const newProject = {
        title: title,
        id: projects.length + 1,
        board: [
            {
                name: 'Todo',
                tickets: [],
            },
            {
                name: 'Todo',
                tickets: [],
            },
            {
                name: 'Todo',
                tickets: [],
            },
        ],
    }
    setProjects([...projects, newProject])
    setCurrentIndex(projects.length)
    }

    function addTicket(ticket) {
        projects[currentIndex].board[0].tickets.push(ticket)
        setProjects([...projects])
    }

    const value = {
        addTicket,
        changeBoard,
        addNewProject,
        currentProject,
        projects,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider