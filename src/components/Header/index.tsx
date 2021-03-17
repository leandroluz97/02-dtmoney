import logoImg from "../../assets/Logo.svg"
import { Container, Content } from "./styles"

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dtmoney' />

        <button type='button'>Nova Transação</button>
      </Content>
    </Container>
  )
}

export default Header
