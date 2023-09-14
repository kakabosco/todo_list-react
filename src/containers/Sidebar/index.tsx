import { useDispatch, useSelector } from 'react-redux'

import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Field } from '../../styles'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.PENDING}
            criterion="status"
            subtitle="Pendentes"
          />
          <CardFilter
            value={enums.Status.DONE}
            criterion="status"
            subtitle="Concluídas"
          />
          <CardFilter
            value={enums.Priority.URGENT}
            criterion="priority"
            subtitle="Urgentes"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            criterion="priority"
            subtitle="Importantes"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            criterion="priority"
            subtitle="Normal"
          />
          <CardFilter criterion="all" subtitle="Todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
