import MainHeader from './components/MainHeader'
import ThemeProvider from './components/ThemeProvider'
import TodosContainer from './containers/TodosContainer'

function App() {
  return (
    <>
      <ThemeProvider />
      <MainHeader />

      <TodosContainer />
    </>
  )
}

export default App
