import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
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

  const fTasks = filteredTasks()

  const showsFilterResult = (quantity: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'all') {
      message = `${quantity} tarefa(s) encontrada(s) como: "Todas" ${complement}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${value}`}" ${complement}`
    }

    return message
  }

  const message = showsFilterResult(fTasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {fTasks.map((t) => (
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
    </MainContainer>
  )
}

export default TodoList
