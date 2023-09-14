import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Title, SaveButton } from '../../styles'
import { Field } from '../../styles'
import { SForm, Options } from './styles'
import * as enums from '../../utils/enums/Task'
import { registerTask } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerNewTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      registerTask({
        title,
        priority,
        status: enums.Status.PENDING,
        description
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <SForm onSubmit={registerNewTask}>
        <Field
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade:</p>
          {Object.values(enums.Priority).map((priority) => (
            <div key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                defaultChecked={priority === enums.Priority.NORMAL}
                id={priority}
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </div>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar tarefa</SaveButton>
      </SForm>
    </MainContainer>
  )
}

export default Form
