"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { AboutSection, Projects, ServiceSection } from './ui/blocks'

export function Home () {
  return (
    <Layout>
      <AboutSection />
      <Projects />
      <ServiceSection/>
    </Layout>
  )
}
