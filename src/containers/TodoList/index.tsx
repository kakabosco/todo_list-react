import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filteredTasks = () => {
    let filterTasks = itens
    if (term !== undefined) {
      filterTasks = filterTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        filterTasks = filterTasks.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filterTasks = filterTasks.filter((item) => item.status === value)
      }

      return filterTasks
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
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
