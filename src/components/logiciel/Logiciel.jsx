import React from 'react'
import logiciel from '../../data/logiciel.json'
import './Logiciel.scss'

const Logiciel = () => {
    return (
        <div className='Logiciel_grid'>
            <h1 className='titre_logiciel'>Logiciels utilisés</h1>
            <div className='Logiciel'>
            {logiciel &&
            logiciel.map((item) => (
                <div className="logiciel" key={item.id}>
                    <img src={item.image} alt={item.alt} />
                    <p>{item.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Logiciel;