'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css'; // Creating a module for specific header styles

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>X</span> Xthumbnail
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/works">My Works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
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
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/works" onClick={closeMenu}>My Works</Link>
        <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
}
