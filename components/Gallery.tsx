'use client';

import { useState, useEffect, useRef } from 'react';
import { galleryData } from '../data/galleryData';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % galleryData.length;
      scrollToSlide(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.galleryOuter}>
      <div className={styles.galleryWindow} ref={containerRef}>
        {galleryData.map((slide) => (
          <div 
            key={slide.id} 
            className={styles.gallerySlide}
            style={{ backgroundImage: `url('${slide.imageUrl}')` }}
            role="img"
            aria-label={slide.alt}
          ></div>
        ))}
      </div>

      <nav className={styles.galleryNav}>
        {galleryData.map((_, index) => (
          <button 
            key={index}
            className={`${styles.navDot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </div>
  );
}
