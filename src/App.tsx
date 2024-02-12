import MainHeader from './components/MainHeader'
import ThemeProvider from './components/ThemeProvider'
import Columns from './components/Columns'

function App() {
  return (
    <>
      <ThemeProvider />
      <MainHeader />

      <Columns />
    </>
  )
}

export default App
