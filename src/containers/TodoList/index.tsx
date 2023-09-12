import Task from '../../components/Task'
import { Container } from './styles'

import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Tarefa 1',
    priority: enums.Priority.IMPORTANT,
    description: 'Descrição da tarefa 1',
    status: enums.Status.PENDING
  },
  {
    title: 'Tarefa 2',
    priority: enums.Priority.URGENT,
    description: 'Descrição da tarefa 2',
    status: enums.Status.DONE
  },
  {
    title: 'Tarefa 3',
    priority: enums.Priority.IMPORTANT,
    description: 'Descrição da tarefa 3',
    status: enums.Status.PENDING
  }
]

const TodoList = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            title={t.title}
            priority={t.priority}
            status={t.status}
            description={t.description}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default TodoList
