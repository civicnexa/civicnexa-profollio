"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { AboutSection, ContactSection, Projects, ServiceSection,TeamSection, TestimonialSection} from './ui/blocks'


export function Home () {
  return (
    <Layout>
      <AboutSection />
      <Projects />
      <ServiceSection/>
      <TeamSection/>
      <TestimonialSection/>
      <ContactSection/>
      
      
    </Layout>
  )
}
