import React from 'react';

export default function Contact() {
  return (
    <section>
      <div className="contact-card">
        <h1 className="contact-title">Contact Me</h1>

        <ul className="contact-list">
          <li>
            <span>Email (preferred): </span>
            <a href="mailto:parkerhansen7777@gmail.com">parkerhansen7777@gmail.com</a>
          </li>
          <li>
            <span>Phone: </span>
            <a href="tel:8174049343">(817) 404-9343</a>
          </li>
        </ul>
      </div>
    </section>
  );
}