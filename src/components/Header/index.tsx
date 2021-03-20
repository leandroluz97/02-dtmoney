import logoImg from "../../assets/Logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTransactionsModal: () => void
}
const Header = ({ onOpenNewTransactionsModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dtmoney' />

        <button type='button' onClick={onOpenNewTransactionsModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}

export default Header
