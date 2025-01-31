import { FaSun, FaMoon } from "react-icons/fa"
import { useEffect } from "react"

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  // Use effect to apply the saved theme preference on load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode === "true") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", !darkMode ? "true" : "false")
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-transform duration-300"
    >
      {darkMode ? (
        <FaSun className="text-xl transition-transform duration-300" />
      ) : (
        <FaMoon className="text-xl transition-transform duration-300" />
      )}
    </button>
  )
}

