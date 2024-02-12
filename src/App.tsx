import Columns from './components/Columns'
import Hero from './components/Hero'
import ThemeProvider from './components/ThemeProvider'

function App() {
  return (
    <>
      <ThemeProvider />
      <Hero />

      <Columns />
    </>
  )
}

export default App
