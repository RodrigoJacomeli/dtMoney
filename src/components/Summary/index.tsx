import { Container } from "./style";
import entradasIcon from "../../assets/Entradas.svg";
import saidasIcon from "../../assets/Saidas.svg";
import totalIcon from "../../assets/Total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasIcon} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasIcon} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
