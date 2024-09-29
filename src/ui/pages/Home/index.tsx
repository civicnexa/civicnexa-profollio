"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { AboutSection, ContactSection, Hero, Projects, ServiceSection,TeamSection, TestimonialSection } from './ui/blocks'
import { useAnimate } from 'framer-motion';


export function Home () {
  const [scope, animate] = useAnimate();
  return (
    <Layout>
      <Hero />
      <AboutSection scope={scope} />
      <Projects />
      <ServiceSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      
      
    </Layout>
  )
}
