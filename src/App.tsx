import { useState } from 'react'
import { DarkModeProvider } from './context/DarkModeContext'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <DarkModeProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 md:ml-64 transition-all duration-300">
          {renderPage()}
        </main>
      </div>
    </DarkModeProvider>
  )
}

export default App

