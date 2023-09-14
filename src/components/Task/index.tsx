import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { removeTask, editTask, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { SaveButton } from '../../styles'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [descriptionValue, setDescriptionValue] = useState('')

  useEffect(() => {
    if (description.length > 0) {
      setDescriptionValue(description)
    }
  }, [description])

  function cancelEdit() {
    setIsEditing(false)
    setDescriptionValue(description)
  }

  function changeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        done: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editTask({
                    title,
                    priority,
                    status,
                    description,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelRemoveButton
              onClick={() => {
                cancelEdit()
              }}
            >
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelRemoveButton onClick={() => dispatch(removeTask(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
