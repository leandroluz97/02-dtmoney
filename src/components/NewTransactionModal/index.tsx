import { Container, TransactionTypeContainer, RadioBox } from "./styles"
import Modal from "react-modal"
import CloseImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useState } from "react"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit")

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={CloseImg} alt='Fechar modal' />
      </button>
      <Container>
        <h2>Cadastar Transação</h2>

        <input placeholder='Titulo' />

        <input type='number' placeholder='Valor' />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            className={type === "deposit" ? "active" : ""}
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saida' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type='number' placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal
