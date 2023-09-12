import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </>
  )
}

export default App
