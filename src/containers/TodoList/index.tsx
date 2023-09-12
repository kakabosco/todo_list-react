import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Tarefa 1',
    priority: 'Importante',
    description: 'Descrição da tarefa 1',
    status: 'Pendente'
  },
  {
    title: 'Tarefa 2',
    priority: 'Urgente',
    description: 'Descrição da tarefa 2',
    status: 'Concluída'
  },
  {
    title: 'Tarefa 3',
    priority: 'Importante',
    description: 'Descrição da tarefa 3',
    status: 'Pendente'
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
