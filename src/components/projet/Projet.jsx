import React, { useState } from 'react'
import projects from '../../data/projets.json'
import { useParams, useNavigate } from 'react-router-dom'
import './Projet.scss'

const ProjectGallery = () => {
    const { id } = useParams() // Récupérer l'ID depuis l'URL
    const [selectedProject, setSelectedProject] = useState(null)
    const navigate = useNavigate()

    // Trouver le projet correspondant à l'ID de l'URL
    const project = projects.find(project => project.id === id)

    const handleProjectClick = (project) => {
        setSelectedProject(project)
        // Rediriger vers la page du projet concerné
        navigate(`/projects/${project.id}`)
    }

    return (
        <div>
            <h1>Mes Projets</h1>
            <div className="project-gallery">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img
                            src={project.cover}
                            alt={project.alt}
                            onClick={() => handleProjectClick(project)}
                            style={{ cursor: 'pointer'}}
                        />
                        <p>{project.title}</p>
                    </div>
                ))}
            </div>

            {/* Afficher les détails du projet sélectionné si un projet est sélectionné */}
            {selectedProject && (
                <div className="project-details">
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    {/* Autres informations du projet */}
                </div>
            )}

            {/* Afficher le projet correspondant à l'ID si présent dans l'URL */}
            {project && !selectedProject && (
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {/* Autres informations du projet */}
                </div>
            )}
        </div>
    )
}

export default ProjectGallery

