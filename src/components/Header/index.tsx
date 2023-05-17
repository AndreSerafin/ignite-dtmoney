import { HeaderContainer, HeaderContent } from './styles'
import logo from '../../assets/imgs/logoIgnite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <button>Nova Transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
