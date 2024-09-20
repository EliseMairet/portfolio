import React, { useState, useEffect } from 'react';
import "./Caroussel.scss";

const Slideshow = ({ images, autoPlayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const goToNextSlide = () => {
      setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
    }

    const interval = setInterval(goToNextSlide, autoPlayInterval)

    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => {
      clearInterval(interval)
    }
  }, [autoPlayInterval, images.length]) // Ajouter autoPlayInterval et images.length comme dépendances

  return (
    <div className='slideshow'>
      <div className='slidecontainer'>
        <img src={images[currentSlide]} alt={`Diapositive ${currentSlide}`} className="image_slide" />
      </div>
      {images.length > 1 && (
        <div className='counter'>
          {currentSlide + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default Slideshow