import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Presentation from '../../components/presentation/Presentation';
import Competences from '../../components/compétences/Competences';
import Projet from '../../components/projet/Projet';
import Logiciel from '../../components/logiciel/Logiciel';
import Contact from '../../components/contact/Contact';
import './Accueil.scss';

const Accueil = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                // Recharger la page quand elle redevient visible
                window.location.reload()
            }
        }

        // Ajouter l'écouteur d'événements pour visibilitychange
        document.addEventListener('visibilitychange', handleVisibilityChange)

        // Nettoyer l'écouteur d'événements quand le composant est démonté
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }
)

    return (
        <main>
            <Navbar />
            <section id="presentation">
                <Presentation />
            </section>
            <section id="competences">
                <Competences />
            </section>
            <section id="logiciel">
                <Logiciel />
            </section>
            <section id="projets">
                <Projet />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
};

export default Accueil;
