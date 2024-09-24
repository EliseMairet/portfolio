  import React from 'react'
  import projets from '../../data/projets.json'
  import Caroussel from '../../components/caroussel/Carrousel'
  import { Link, useParams } from "react-router-dom"
  import './Projets.scss'

  const Projet = () => {
    const { id } = useParams() // Récupérer l'ID depuis l'URL

    // Trouver le projet correspondant à l'ID
    const projet = projets.find((projet) => projet.id === id)

    // Si le projet n'est pas trouvé, afficher un message d'erreur ou rediriger
    if (!projet) {
      return <p>Projet non trouvé</p>
    }

    return (
      <div className="projet_container">
        <div className="project_card">
        <Link to="/" className="btn-retour">Retour à la page d'accueil</Link>
          <h2>{projet.title}</h2>
          {projet.pictures && projet.pictures.length > 1 && (
            <Caroussel images={projet.pictures} />
          )}
          <p><strong>Catégorie:</strong> {projet.categorie}</p>
          <p>{projet.description}</p>
          <p><strong>Mission:</strong> {projet.mission}</p>
          <p><strong>Tags:</strong> {projet.tags.join(', ')}</p>
          <a href={projet.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
        </div>
      </div>
    )
  }

  export default Projet