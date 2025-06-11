// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+13022440434'; // Replace with your number
  const message = 'Hello, I need help with your medical billing services.';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
};

export default WhatsAppButton;
