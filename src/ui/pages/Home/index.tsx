"use client";
import { Layout } from '@/ui/modules/partials'
import React from 'react'
import { AboutSection, Projects } from './ui/blocks'

export function Home () {
  return (
    <Layout>
      <AboutSection />
      <Projects />
    </Layout>
  )
}
