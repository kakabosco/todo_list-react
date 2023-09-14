import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

export type Props = {
  subtitle: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const verifyIsActive = () => {
    return filter.criterion === criterion && filter.value === value
  }

  const active = verifyIsActive()

  const countTasks = () => {
    if (criterion === 'all') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const counter = countTasks()

  const filtrate = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  return (
    <S.Card active={active} onClick={filtrate}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}
export default CardFilter
