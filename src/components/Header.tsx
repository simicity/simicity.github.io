import './../index.css'
import { useState, useEffect } from 'react'
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
      <div className='flex justify-between space-x-2'>
        <img src="favicon.png" alt="" className='w-6 h-6' />
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (<SunIcon size={"22px"}/>) : (<MoonIcon size={"22px"}/>)}
        </button>
      </div>
    </div>
  )
}