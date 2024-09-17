//mettre les contact (tel, mails, onglets commentaires qui rediriges le messages a l'adresse mails)
import React, { useState } from 'react'
import './Contact.scss'

function ContactForm() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // intégrer l'appel service EmailJS
        console.log('Nom:', nom)
        console.log('Prénom:', prenom)
        console.log('Email:', email)
        console.log('Message:', message)

        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        //     nom: nom,
        //     prenom: prenom,
        //     email: email,
        //     message: message,
        // }, 'YOUR_USER_ID')
        // .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        // }, (err) => {
        //     console.error('FAILED...', err);
        // });

        // Réinitialiser le formulaire après l'envoi
        setNom('')
        setPrenom('')
        setEmail('')
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='contact'>Me contacter</h1>
            <div>
                <label>Nom:</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom"
                    required
                />
            </div>
            <div>
                <label>Prénom:</label>
                <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Votre prénom"
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message"
                    required
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default ContactForm
