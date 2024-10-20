"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { motion } from 'framer-motion';
import { 
  AboutSection, 
  ContactSection, 
  Hero, 
  Projects, 
  ServiceSection,
  TeamSection, 
  TestimonialSection 
} from './ui/blocks'
import { useAnimate } from 'framer-motion';
import { Box } from '@mui/material';


export function Home () {
  const [scope, animate] = useAnimate();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Box id="section1">
        <Hero />
      </Box>
      <Box id="section2">
        <AboutSection scope={scope} />
      </Box>
      <Box id="section3">
        <Projects />
      </Box>
      <Box id="section4">
        <ServiceSection />
      </Box>
      <Box id="section">
        <TeamSection />
      </Box>
      <Box id="section">
        <TestimonialSection />
      </Box>
      <Box id="section5">
        <ContactSection />
      </Box>
      
      
    </Layout>
  )
}
