import { Container, TransactionTypeContainer, RadioBox } from "./styles"
import Modal from "react-modal"
import CloseImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react"

import { useTransactions } from "../../hooks/useTransactions"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  //context api
  const { createTransaction } = useTransactions()

  //states
  const [type, setType] = useState("deposit")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

  //handle functions
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    //create new transaction
    await createTransaction({ title, amount, category, type })

    //set the input values to their default values
    setType("deposit")
    setTitle("")
    setCategory("")
    setAmount(0)

    //close modal
    onRequestClose()
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastar Transação</h2>

        <input
          placeholder='Titulo'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
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

        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal
