import { Container } from "./style";
import { useTransactions } from "../../hooks/useTransactions";

import entradasIcon from "../../assets/Entradas.svg";
import saidasIcon from "../../assets/Saidas.svg";
import totalIcon from "../../assets/Total.svg";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "deposit") {
        acc.deposits += transactions.amount;
        acc.balance += transactions.amount;
      } else {
        acc.withdraws += transactions.amount;
        acc.balance -= transactions.amount;
      }

      return acc;
    },
    { deposits: 0, withdraws: 0, balance: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasIcon} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasIcon} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.balance)}
        </strong>
      </div>
    </Container>
  );
}
