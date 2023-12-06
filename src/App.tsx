import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'

function App() {

  return (
    <div className="data-scroll flex flex-col items-center justify-between py-10 px-20">
      <Header />

      <div className="my-10 text-xl text-center font-light w-4/5 md:w-4/5 text-gray-700 dark:text-gray-200">
        <p className='text-7xl font-black'>{"Hi, I'm Miho! 👋🏻"}</p>
        <p className='text-7xl font-black mb-2'>{"I'm a "}<span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500">{" software engineer"}</span></p>
        <p>{"who finds joy in building functional applications that bring ideas to life. 👩🏻‍💻 "}</p>
        <p>{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</p>
      </div>

      <Projects />

      <Footer />
    </div>
  )
}

export default App
