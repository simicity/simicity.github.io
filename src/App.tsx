import './index.css'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'

function App() {

  return (
    <div className="data-scroll flex flex-col items-center justify-between py-10 px-20">
      <Header />

      <Hero />

      <Projects />

      <Footer />
    </div>
  )
}

export default App
