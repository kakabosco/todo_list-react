import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
