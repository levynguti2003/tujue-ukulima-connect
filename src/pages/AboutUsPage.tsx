
import React from 'react';
import Layout from "@/components/layout/Layout";
import AboutHero from '@/components/about/AboutHero';
import AboutVision from '@/components/about/AboutVision';
import AboutEcosystem from '@/components/about/AboutEcosystem';
import AboutTeam from '@/components/about/AboutTeam';
import AboutImpact from '@/components/about/AboutImpact';
import AboutCTA from '@/components/about/AboutCTA';

const AboutUsPage = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutVision />
      <AboutEcosystem />
      <AboutTeam />
      <AboutImpact />
      <AboutCTA />
    </Layout>
  );
};

export default AboutUsPage;
