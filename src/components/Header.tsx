import './../index.css'
import { useState, useEffect } from 'react'
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedInIcon } from "../icons/LinkedInIcon"
import { ResumeIcon } from "../icons/ResumeIcon"
import { MoonIcon } from "../icons/MoonIcon"
import { SunIcon } from "../icons/SunIcon"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }

  useEffect(() => {
    const checkTheme = () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    }

    checkTheme()
  }, [])

  return (
    <div className="z-10 w-full">
      <div className="fixed bottom-0 left-0 flex h-40 w-full items-end justify-center bg-gradient-to-t from-pink-300 via-red-300 dark:from-cyan-700 dark:via-cyan-950 lg:static lg:w-full lg:justify-end lg:h-auto lg:bg-none">
        <ul className='flex flex-row m-6 dark:text-[#5897A6]'>
          <li>
            <a target="_blank" href="https://github.com/simicity">
              <GithubIcon size={"25px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://www.linkedin.com/in/mihoshimizu/">
              <LinkedInIcon size={"25px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://drive.google.com/file/d/1cvKt5aRwiUDG6jFSGVcmee40UBguiX9w/view?usp=sharing">
              <ResumeIcon size={"25px"} />
            </a>
          </li>
          <li className='pl-3'>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (<SunIcon size={"25px"}/>) : (<MoonIcon size={"25px"}/>)}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}