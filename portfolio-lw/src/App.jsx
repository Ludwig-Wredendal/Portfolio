import React from 'react'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

// För att starta kör 'npm run dev' när du står i projektes katalog.

function App() {

  return (
    <div className='App'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
