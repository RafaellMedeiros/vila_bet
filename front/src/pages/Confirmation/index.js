import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import {
  PageArea,
  WppButton,
  NewBetButton,
  ButtonsArea,
  PrintTicketButton,
  PrintArea,
} from "./styled";
import WppImage from "./assets/whatsapp.png";
import useApi from "../../services/api";

const Page = () => {
  const navigate = useNavigate();
  const api = useApi();
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [Nocopied, setNoCopied] = useState(true);
  const [ticket, setTicket] = useState([]);
  let newBet = false;
  useEffect(() => {
    api.getBet(id).then((response) => setTicket(response.data));
  }, []);

  const handleSendWpp = () => {};
  const handlePrint = () => {
    newBet = true;
    window.print();
  };
  console.log(ticket);
  console.log("id:", id);
  const handleNewBet = () => {
    if (newBet) {
      navigate("/apostas");
    } else {
      alert("Imprima para poder ir para nova aposta!");
    }
  };

  return (
    <PageContainer>
      <PageTitle>Aposta enviada com sucesso!</PageTitle>
      <PageArea>
        <PrintArea>
          <title>Ticket de Aposta - Vila Bet</title>

          <h1>Ticket - Vila Bet</h1>
          <p>
            <strong>identificador: </strong> {id}
          </p>
          <table>
            <tbody>
              <tr>
                <th>Jogo</th>
                <th>Resultado</th>
              </tr>
              {ticket?.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.time_home} X {item.time_away}
                  </td>
                  <td>{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </PrintArea>
        <ButtonsArea>
          <WppButton onClick={handleSendWpp}>
            <img src={WppImage} alt="" />
            <div className="wpp-text">Envie o ticket para o apostador.</div>
          </WppButton>
          <NewBetButton onClick={handleNewBet}>Nova aposta</NewBetButton>
          <PrintTicketButton onClick={handlePrint}>Imprimir</PrintTicketButton>
        </ButtonsArea>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
