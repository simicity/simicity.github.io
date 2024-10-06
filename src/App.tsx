import './index.css'
import Header from './components/Header.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'
import WorkExperience from './components/WorkExperience.tsx'
import Hero from './components/Hero.tsx'

function App() {

  return (
    <div className="data-scroll py-10 px-20 max-w-[800px] mx-auto">
      <Header />

      <Hero />

      <About />

      <WorkExperience />

      <Projects />

      <Footer />
    </div>
  )
}

export default App
