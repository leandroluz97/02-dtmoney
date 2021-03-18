import React from "react"
import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='entradas' />
        </header>
        <strong>€1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt='saidas' />
        </header>
        <strong>-€500</strong>
      </div>
      <div className='hightlight-background'>
        <header>
          <p>total</p>
          <img src={totalImg} alt='total' />
        </header>
        <strong>€500</strong>
      </div>
    </Container>
  )
}

export default Summary
