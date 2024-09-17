import React from 'react'
import './Presentation.scss'
import liens from '../../data/lien.json'

const Presentation = () => {
    return (
        <section className='Pres'>
            <h2 className='a_propos'>
                Présentation
            </h2>
            <div className='description'>
                <p>
                    Hello, je m'appelle Elise Mairet, ayant toujours aimé les nouvelles technologies, j'ai décidé
                    de me reconvertir en tant que développeuse web, après 3 ans de le milieu paramédical.
                </p>
                <p>
                    J'ai donc intégré la formation certifiante d'OpenClassrooms de développeur web bac+2, durant laquelle
                    j'ai pu acquérir des compétences dans différents langages (HTML, CSS, SASS, JavaScript et React).
                </p>
                <p>
                    Je voudrais découvrir et m'améliorer avec d'autres langages et d'autres méthodes, afin de me perfectionner dans mon futur travail.
                </p>
                <p>
                    Je pratique également différents hobbies tels que : les échecs, la musculation, les jeux vidéo, et la lecture.
                </p>
            </div>
            <div className='Lien'>
                {liens.map(lien => (
                    <a 
                        key={lien.id}
                        href={lien.url}
                        className={`btn ${lien.class}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {lien.label}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Presentation