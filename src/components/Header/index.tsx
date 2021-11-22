import dtMoneyIcon from "../../assets/icon.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={dtMoneyIcon} alt="dtmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
