'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = `New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Trigger mailto
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="John Doe" 
                required 
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="john@example.com" 
                required 
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                rows={4} 
                id="message"
                name="message"
                placeholder="Tell me about your video..." 
                required 
                className={styles.input}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message ✉️</button>
          </form>
        </div>
      </div>
    </section>
  );
}
