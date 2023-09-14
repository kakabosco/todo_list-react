import { useDispatch, useSelector } from 'react-redux'

import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <CardFilter subtitle="Pendentes" counter={0} />
          <CardFilter subtitle="Concluídas" counter={0} />
          <CardFilter subtitle="Urgentes" counter={0} />
          <CardFilter subtitle="Importantes" counter={0} />
          <CardFilter subtitle="Normal" counter={0} />
          <CardFilter subtitle="Todas" counter={0} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
