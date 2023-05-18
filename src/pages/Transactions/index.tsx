import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { SearchFormContainer } from './components/styles'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Home() {
  return (
    <>
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.080,05</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>18/05/2023</td>
            </tr>
            <tr>
              <td width="50%">Habúrguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,05</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>19/05/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
