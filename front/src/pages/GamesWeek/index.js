/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, DateLimit } from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();
  const [games, setGames] = useState([
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" } /* 
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" },
    { home: "", away: "" }, */,
  ]);
  const [dateLimit, setDateLimit] = useState("");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  const handleChangeHome = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].home = value;
    setGames(gamesCopy);
  };
  const handleChangeAway = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].away = value;
    setGames(gamesCopy);
  };
  const handleSendButton = () => {
    if (!isAnyGameEmpty) {
      api.gamesWeek(games, dateLimit);
    } else {
      alert("Preencha todos os jogos!");
    }
  };
  const isAnyGameEmpty = games.some((game) =>
    Object.values(game).some((value) => !value)
  );
  console.log(isAnyGameEmpty);

  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar</Back>
      <PageTitle>Cadastro de jogos da semana.</PageTitle>
      <PageArea>
        <form>
          <DateLimit>
            <div className="date-limit-title">Informe a data limite:</div>
            <input
              type="datetime-local"
              value={dateLimit}
              onChange={(e) => setDateLimit(e.target.value)}
              required
            />
          </DateLimit>
          <div className="container">
            {games.map((i, k) => (
              <div className="games" key={k}>
                <h3 key={k}>Jogo {k + 1}</h3>
                <label htmlFor={`${k}`}>
                  <div className="game" key={k + 1}>
                    Casa:
                    <input
                      type="text"
                      value={games[k].home}
                      name={k + "home"}
                      id={`${k}`}
                      onChange={(e) => handleChangeHome(k, e.target.value)}
                      required
                    />
                  </div>
                </label>
                <div className="game" key={k + 2}>
                  Fora:
                  <input
                    type="text"
                    value={games[k].away}
                    name="away"
                    id={`${k + 1}`}
                    onChange={(e) => handleChangeAway(k, e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
          </div>

          <label className="area--button">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled} onClick={handleSendButton}>
                Enviar
              </button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
