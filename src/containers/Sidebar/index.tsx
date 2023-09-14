import { useDispatch, useSelector } from 'react-redux'

import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Field } from '../../styles'
import { ReturnPage } from './styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
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
          </>
        ) : (
          <ReturnPage to="/">
            <img src="back.png" alt="" />
            <p>Voltar para as tarefas</p>
          </ReturnPage>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
