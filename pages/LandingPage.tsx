import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import Financials from '../components/Financials';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Team />
      <Financials />
      <Roadmap />
    </>
  );
};

export default LandingPage;