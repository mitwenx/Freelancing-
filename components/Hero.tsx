'use client';

import Link from 'next/link';
import CircularGallery from './CircularGallery';
import { galleryData } from '../data/galleryData';
import styles from './Hero.module.css';

export default function Hero() {
  // Map your existing gallery data to the format CircularGallery expects
  const galleryItems = galleryData.map(item => ({
    image: item.imageUrl,
    text: item.alt
  }));

  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.badge}>
          🎨 YouTube Thumbnail Specialist
        </div>
        <h1 className={styles.title}>
          Thumbnails That <span className="gradient-text">Get Clicked</span>
        </h1>
        <p className={styles.subtitle}>
          I design scroll-stopping thumbnails that boost CTR. Clean, bold, and designed to convert viewers into subscribers.
        </p>
        <div className={styles.buttons}>
          <Link href="/pricing" className="btn btn-primary">Get First Free</Link>
          <Link href="/works" className="btn btn-outline">View Portfolio</Link>
        </div>
        
        {/* New 3D Circular Gallery */}
        <div style={{ height: '600px', width: '100%', marginTop: '40px' }}>
          <CircularGallery 
            items={galleryItems} 
            bend={2} 
            textColor="#ffffff" 
            borderRadius={0.05}
          />
        </div>
      </div>
    </section>
  );
                     }
