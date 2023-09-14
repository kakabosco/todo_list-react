import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.title}>
            <Task
              title={t.title}
              priority={t.priority}
              status={t.status}
              description={t.description}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
