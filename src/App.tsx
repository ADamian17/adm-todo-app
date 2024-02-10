import TodoForm from './components/TodoForm'
import TodosContainer from './containers/TodosContainer'

function App() {
  return (
    <>
      <header>
        <TodoForm />
      </header>

      <TodosContainer />
    </>
  )
}

export default App
