import styled from "styled-components"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import { GblobalStyle } from "./styles/global"
import Modal from "react-modal"
import { useState } from "react"

Modal.setAppElement("#root")

function App() {
  const [isNewTransactionsOpen, setIsNewTransactionsOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsOpen(true)
  }
  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionsOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      >
        <h2>Cadastar Transação</h2>
      </Modal>
      <GblobalStyle />
    </>
  )
}

export default App
