import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>X</span> Xthumbnail
          </Link>
        </div>

        {/* Social / Contact Icons */}
        <div className={styles.socialLinks}>
          <a 
            href="mailto:your@email.com" 
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
            {/* Upwork Icon (Simplified) */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.077.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.211 2.703-2.704 2.703zm0-7.347c-2.556 0-4.637 2.08-4.637 4.637 0 .202.026.397.046.598-1.771-1.378-3.04-3.667-3.619-6.395h-1.99c.697 3.864 2.378 6.777 4.908 8.683.003.111.007.222.007.332 0 4.142-3.376 7.518-7.516 7.518-4.142 0-7.518-3.376-7.518-7.518 0-4.141 3.376-7.517 7.518-7.517h.54v1.949c-.178-.009-.36-.015-.54-.015-3.067 0-5.569 2.502-5.569 5.583 0 3.081 2.502 5.583 5.569 5.583 3.082 0 5.584-2.502 5.584-5.583 0-.74-.15-1.442-.416-2.084 1.258 1.439 2.094 3.208 2.251 5.485l1.649.349c-.131-1.638-.568-2.924-1.076-4.047 1.243 1.149 2.704 1.765 4.285 1.765 3.626 0 6.574-2.956 6.574-6.586 0-3.63-2.948-6.586-6.574-6.586z"/>
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
        <p className={styles.copy}>&copy; 2024 Xthumbnail Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
