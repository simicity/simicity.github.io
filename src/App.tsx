import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'

function App() {

  return (
    <div className="data-scroll flex flex-col items-center justify-between py-10 px-20">
      <Header />

      <div className="my-10 text-lg text-center font-light w-3/4 md:w-2/3 text-gray-600 dark:text-slate-400">
        <span>{"Hi, I'm Miho! 👋🏻 I'm a"} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500">{" software engineer "}</span>{"who finds joy in building functional applications that bring ideas to life. 👩🏻‍💻 "}</span>
        <span>{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</span>
      </div>

      <Projects />

      <Footer />
    </div>
  )
}

export default App
