import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filteredTasks = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        {filteredTasks().map((t) => (
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
