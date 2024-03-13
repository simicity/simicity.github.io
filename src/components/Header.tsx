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
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-full lg:justify-end lg:h-auto lg:bg-none">
        <ul className='flex flex-row m-10'>
          <li>
            <a target="_blank" href="https://github.com/simicity">
              <GithubIcon size={"27px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://www.linkedin.com/in/mihoshimizu/">
              <LinkedInIcon size={"27px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://drive.google.com/file/d/1T7TfyRWzTOEgNxZuDQJwySlvZ7d99H7a/view?usp=sharing">
              <ResumeIcon size={"27px"} />
            </a>
          </li>
          <li className='pl-3'>
            <button className="hover:fill-yellow-300" onClick={toggleDarkMode}>
              {isDarkMode ? (<SunIcon size={"27px"}/>) : (<MoonIcon size={"27px"}/>)}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}