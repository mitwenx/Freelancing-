import { worksData } from '../data/worksData';
import styles from './WorksGrid.module.css';

export default function WorksGrid() {
  return (
    <section id="works" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Recent Designs</h2>
          <p className="section-subtitle">A collection of high-CTR thumbnails created for various niches.</p>
        </div>
        
        <div className={styles.thumbGrid}>
          {worksData.map((work) => (
            <div key={work.id} className={styles.thumbCard}>
              <div className={`${styles.thumbPlaceholder} ${styles[work.gradientClass]}`}>
                {work.icon}
              </div>
              <div className={styles.thumbInfo}>
                <div className={styles.thumbTitle}>{work.title}</div>
                <div className={styles.thumbMeta}>{work.category} • {work.views}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
