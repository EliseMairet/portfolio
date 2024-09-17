import React from 'react'
import langage from '../../data/compétences.json'
import './Competences.scss'


const Competences = () => {
    return (
        <div className='Langage'>
            <h1 className='titre_langage'>Langages et frameworks utilisés</h1>
            {langage &&
            langage.map((competence) => (
                <div className="competences" key={competence.id}>
                    <img src={competence.image} alt={competence.alt} />
                    <p>{competence.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Competences;
