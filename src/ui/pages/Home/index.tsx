"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { AboutSection, ContactSection, Hero, Projects, ServiceSection,TeamSection, TestimonialSection } from './ui/blocks'


export function Home () {
  return (
    <Layout>
      <Hero data-speed="clamp(0.5)" />
      <AboutSection data-speed="clamp(2)" />
      <Projects data-speed="clamp(3)" />
      <ServiceSection data-speed="clamp(4)" />
      <TeamSection data-speed="clamp(0.5)" />
      <TestimonialSection data-speed="clamp(0.5)" />
      <ContactSection data-speed="clamp(0.5)" />
      
      
    </Layout>
  )
}
