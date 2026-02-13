'use client';

import { FormEvent } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to boost your channel? Send me a message.</p>
        </div>
        
        <div className={styles.contactWrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="John Doe" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="john@example.com" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea rows={4} placeholder="Tell me about your video..." required className={styles.input}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message ✉️</button>
          </form>
        </div>
      </div>
    </section>
  );
}
