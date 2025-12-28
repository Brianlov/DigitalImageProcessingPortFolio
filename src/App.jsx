import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WeeklyLog from './components/WeeklyLog';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="w-full h-px bg-accent my-4 opacity-50"></div>
      <WeeklyLog />
    </Layout>
  );
}

export default App;
