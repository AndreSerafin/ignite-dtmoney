import { HeaderContainer, HeaderContent } from './styles'
import logo from '../../assets/imgs/logoIgnite.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <Dialog.Root>
          <Dialog.Trigger>Nova Transação</Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
