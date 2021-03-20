import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import { GblobalStyle } from "./styles/global"
import Modal from "react-modal"
import { useState } from "react"
import NewTransactionModal from "./components/NewTransactionModal"
import { TransactionsProvider } from "./hooks/useTransactions"

Modal.setAppElement("#root")

function App() {
  //states
  const [isNewTransactionsOpen, setIsNewTransactionsOpen] = useState(false)

  //handle functions
  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsOpen(true)
  }
  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
      <GblobalStyle />
    </TransactionsProvider>
  )
}

export default App
