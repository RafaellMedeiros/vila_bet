import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  useEffect(() => {
    api.getBet(id).then((data) => setTicket(data));
  }, []);

  const handleSendWpp = () => {};
  const handlePrint = () => {
    window.print();
  };
  console.log(ticket);
  console.log("id:", id);

  return (
    <PageContainer>
      <PageTitle>Aposta enviada com sucesso!</PageTitle>
      <PageArea>
        <PrintArea>
          <head>
            <title>Ticket de Aposta - Vila Bet</title>
          </head>
          <body>
            <h1>Ticket - Vila Bet</h1>
            <p>
              <strong>identificador: </strong> {id}
            </p>
            <table>
              <tr>
                <th>Jogo</th>
                <th>Resultado</th>
              </tr>
              <tr>
                <td>Flamengo x Vasco</td>
                <td>Flamengo</td>
              </tr>
              <tr>
                <td>São Paulo x Palmeiras</td>
                <td>Empate</td>
              </tr>
              <tr>
                <td>Corinthians x Santos</td>
                <td>Corinthians</td>
              </tr>
              <tr>
                <td>Flamengo x Vasco</td>
                <td>Flamengo</td>
              </tr>
              <tr>
                <td>São Paulo x Palmeiras</td>
                <td>Empate</td>
              </tr>
              <tr>
                <td>Corinthians x Santos</td>
                <td>Corinthians</td>
              </tr>
              <tr>
                <td>Flamengo x Vasco</td>
                <td>Flamengo</td>
              </tr>
              <tr>
                <td>Corinthians x Santos</td>
                <td>Corinthians</td>
              </tr>
              <tr>
                <td>Flamengo x Vasco</td>
                <td>Flamengo</td>
              </tr>
              <tr>
                <td>São Paulo x Palmeiras</td>
                <td>Empate</td>
              </tr>
              <tr>
                <td>Corinthians x Santos</td>
                <td>Corinthians</td>
              </tr>
              <tr>
                <td>São Paulo x Palmeiras</td>
                <td>Empate</td>
              </tr>
              <tr>
                <td>Corinthians x Santos</td>
                <td>Corinthians</td>
              </tr>
            </table>
          </body>
        </PrintArea>
        <ButtonsArea>
          <WppButton onClick={handleSendWpp}>
            <img src={WppImage} alt="" />
            <div className="wpp-text">Envie o ticket para o apostador.</div>
          </WppButton>
          <NewBetButton>Nova aposta</NewBetButton>
          <PrintTicketButton onClick={handlePrint}>Imprimir</PrintTicketButton>
        </ButtonsArea>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
