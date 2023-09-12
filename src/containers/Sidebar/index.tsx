import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
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

export default Sidebar
