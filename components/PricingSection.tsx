import { pricingData } from '../data/pricingData';
import styles from './Pricing.module.css';

export default function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">Start with a free trial. No credit card required.</p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingData.map((plan) => (
            <div key={plan.id} className={`${styles.pricingCard} ${plan.isFeatured ? styles.featured : ''}`}>
              {plan.badge && <span className={styles.pricingBadge}>{plan.badge}</span>}
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{plan.icon}</div>
              <h3>{plan.title}</h3>
              <div className={styles.pricingPrice}>{plan.price}</div>
              <p>{plan.unit}</p>
              <ul className={styles.pricingFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a 
                href={plan.ctaLink} 
                className={`btn ${plan.buttonStyle === 'primary' ? 'btn-primary' : 'btn-tonal'}`} 
                style={{ width: '100%' }}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
