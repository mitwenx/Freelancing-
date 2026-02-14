'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Helper to determine active class
  const isActive = (path: string) => pathname === path ? styles.active : '';

  // For mobile, we return the class name string for CSS Modules
  const getMobileClass = (path: string) => pathname === path ? styles.active : '';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>X</span> Xthumbnail
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={isActive('/')}>Home</Link></li>
            <li><Link href="/works" className={isActive('/works')}>My Works</Link></li>
            <li><Link href="/pricing" className={isActive('/pricing')}>Pricing</Link></li>
            <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.headerControls}>
          <ThemeToggle />
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
            onClick={toggleMenu} 
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.navOpen : ''}`}>
        <Link href="/" onClick={closeMenu} className={getMobileClass('/')}>Home</Link>
        <Link href="/works" onClick={closeMenu} className={getMobileClass('/works')}>My Works</Link>
        <Link href="/pricing" onClick={closeMenu} className={getMobileClass('/pricing')}>Pricing</Link>
        <Link href="/contact" onClick={closeMenu} className={getMobileClass('/contact')}>Contact</Link>
      </div>
    </header>
  );
}
