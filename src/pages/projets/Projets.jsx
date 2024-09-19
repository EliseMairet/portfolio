import React from 'react';
import projets from '../../data/projets.json'
import { Carousel } from 'react-responsive-carousel'
import { useParams } from "react-router-dom"
import './Projets.scss'

const Projet = () => {
    const { id } = useParams() // Récupérer l'ID depuis l'URL
console.log(id)
    // Trouver le projet correspondant à l'ID
    const projet = projets.find((projet) => projet.id === id)

    // Si le projet n'est pas trouvé, afficher un message d'erreur ou rediriger
    if (!projet) {
        return <p>Projet non trouvé</p>
    }

    return (
        <div className="projet_container">
            <div className="project_card">
                {projet.pictures && projet.pictures.length > 0 && (
                    <img 
                        src={projet.pictures[0]} 
                        alt={projet.alt || projet.title} 
                        className="project_pictures" 
                    />
                )}
                <h2>{projet.title}</h2>
                <p><strong>Catégorie:</strong> {projet.categorie}</p>
                <p>{projet.description}</p>
                <p><strong>Mission:</strong> {projet.mission}</p>
                <p><strong>Tags:</strong> {projet.tags.join(', ')}</p>
                <a href={projet.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>

                {projet.pictures && projet.pictures.length > 1 && (
                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                        {projet.pictures.map((picture, index) => (
                            <div key={index}>
                                <img 
                                    src={picture} 
                                    alt={`${projet.title} - slide ${index + 1}`} 
                                />
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    )
}

export default Projet
