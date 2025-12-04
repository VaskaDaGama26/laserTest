import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Equipment } from './components/Equipment';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Gallery />
      <Process />
      <Equipment />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}
