import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>M</span> Mitwen
          </Link>
        </div>

        {/* Social / Contact Icons */}
        <div className={styles.socialLinks}>
          <a 
            href="mailto:contact@mitwen.com" 
            className={styles.socialBtn} 
            aria-label="Email Me"
            title="Email Me"
          >
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          
          <a 
            href="https://www.upwork.com/freelancers/~yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialBtn}
            aria-label="Hire me on Upwork"
            title="Hire me on Upwork"
          >
            {/* Upwork Icon */}
            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
              <ellipse cx="184.5" cy="234.5" rx="57.5" ry="56.5" transform="translate(-546.174 -763.565) scale(4.34783)" fill="currentColor" />
              <path d="M345.516 181.708c-42.168 0-65.774 27.481-72.532 55.773-7.658-14.416-13.335-33.698-17.75-51.628H196.94v72.531c0 26.31-11.984 45.772-35.41 45.772-23.427 0-36.852-19.462-36.852-45.772l.27-72.531H91.34v72.531c0 21.174 6.848 40.366 19.372 54.061 12.884 14.146 30.454 21.534 50.817 21.534 40.545 0 68.837-31.085 68.837-75.595V209.64c4.235 16.038 14.326 46.853 33.608 73.884l-18.02 102.625h34.148l11.893-72.712c3.875 3.244 8.02 6.127 12.434 8.74 11.443 7.208 24.508 11.263 38.023 11.713 0 0 2.073.09 3.154.09 41.807 0 75.054-32.346 75.054-76.045 0-43.7-33.337-76.226-75.144-76.226m0 122.358c-25.86 0-42.979-20.003-47.754-27.752 6.127-49.015 24.057-64.512 47.754-64.512 23.426 0 41.626 18.741 41.626 46.132 0 27.39-18.2 46.132-41.626 46.132" fill="currentColor" fillRule="nonzero"/>
            </svg>
          </a>
        </div>

        {/* Legal Links */}
        <div className={styles.legalLinks}>
          <Link href="/terms">Terms & Conditions</Link>
          <span className={styles.separator}>•</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        {/* Copyright */}
        <p className={styles.copy}>&copy; 2026 mitwen.com All rights reserved.</p>
      </div>
    </footer>
  );
}
