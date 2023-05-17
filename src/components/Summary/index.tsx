import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#08b37a" />
        </header>
        <strong>R$ 18.000,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 18.000,00</strong>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 18.000,00</strong>
      </div>
    </SummaryContainer>
  )
}