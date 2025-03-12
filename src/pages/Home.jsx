import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import InsideStory from '../components/InsideStory'
import MoreStories from '../components/MoreStories'
import Gallery from '../components/Gallery'
import FinancialDocumentations from '../components/FinancialDocumentations'
// import FloatingShapes from '../components/FloatingShape'

const Home = () => {
    return (
    <div className="relative">
{/* <FloatingShapes /> */}
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="inside-story">
        <InsideStory />
      </section>
      <section id="more-stories">
        <MoreStories />
      </section>
      <section id="financial-docs">
        <FinancialDocumentations />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </div>
  )
}

export default Home
