import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { removeTask } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelRemoveButton onClick={() => setIsEditing(false)}>
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
