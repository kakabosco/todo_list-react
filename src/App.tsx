import { Provider } from 'react-redux'
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import TodoList from './containers/TodoList'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
