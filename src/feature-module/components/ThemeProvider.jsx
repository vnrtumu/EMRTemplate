import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const getInitialTheme = () => {
  const stored = sessionStorage.getItem('__THEME_CONFIG__')
  if (stored) {
    try {
      return JSON.parse(stored).theme || 'light'
    } catch {}
  }
  return document.documentElement.getAttribute('data-bs-theme') || 'light'
}

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-bs-theme', theme)
  const stored = sessionStorage.getItem('__THEME_CONFIG__')
  if (stored) {
    try {
      const config = JSON.parse(stored)
      config.theme = theme
      sessionStorage.setItem('__THEME_CONFIG__', JSON.stringify(config))
    } catch {}
  }
  const customizer = window.ThemeCustomizer
  if (customizer && customizer.changeLayoutColor) {
    customizer.changeLayoutColor(theme)
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    applyTheme(theme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      applyTheme(next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
