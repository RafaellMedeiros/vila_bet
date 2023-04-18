import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea, InfosArea, SendButton, SendButtonArea } from "./styled";
import Modal from "../../components/Modal";
import ModalInfos from "../../components/ModalInfos";
import useApi from "../../services/api";

const Page = () => {
  const api = useApi();
  /* const teste = async () => {
    const isLogged = await api.validateToken();

    console.log("isok:", isLogged);
  }; */
  const [isValid, setIsValid] = useState({});
  useEffect(() => {
    api.validateToken().then((data) => setIsValid(data));
  }, []);

  console.log("isvalid:", isValid);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [seller, setSeller] = useState({ fullName: "", sellerId: "" });
  const [disabled, setDisabled] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [games, setGames] = useState([]);
  let sellerId;
  useEffect(() => {
    api.getUser().then((data) => {
      setSeller({ fullName: data.fullName, sellerId: data.cpf });
    });
  }, []);
  useEffect(() => {
    api.getGamesWeek().then((data) => setGames(data));
  }, []);

  const handleOnChange = (index, value) => {
    const gamesCopy = [...games];
    gamesCopy[index].result = value;
    setGames(gamesCopy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    setDisabled(false);
  };
  const handleSendButton = (e) => {
    e.preventDefault();
    if (canSubmit()) {
      const infos = { games, name, phone, address, seller };
      setModalData(infos);
      setModalStatus(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };
  const canSubmit = () => {
    if (isUserContactFormValid() && isAllGamesFilled) {
      return true;
    } else {
      return false;
    }
  };
  const isUserContactFormValid = () => {
    if (name !== "" && phone !== "" && address !== "") {
      return true;
    } else {
      return false;
    }
  };

  const isAllGamesFilled = games.every((game) => game.result);
  return (
    <PageContainer>
      {isValid.isValid && (
        <>
          <PageTitle>Apostas da semana</PageTitle>
          <form onSubmit={handleSendButton}>
            <InfosArea>
              <label className="area">
                <div className="area--title">Nome:</div>
                <div className="area--input">
                  <input
                    type="text"
                    disabled={disabled}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="area">
                <div className="area--title">Telefone:</div>
                <div className="area--input">
                  <input
                    type="tel"
                    disabled={disabled}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="area">
                <div className="area--title">Endereço:</div>
                <div className="area--input">
                  <input
                    type="text"
                    disabled={disabled}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="area">
                <div className="area--title">Responsável:</div>
                <div className="area--input">
                  <p>{seller.fullName}</p>
                </div>
              </label>
            </InfosArea>
            <PageArea>
              <div className="container">
                {games &&
                  games.map((i, k) => (
                    <div className="games" key={k}>
                      <h3 key={k}>Jogo {k + 1}</h3>

                      <label htmlFor={`${k}`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "home" ? "#781010" : "",
                            color: i.result === "home" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"home"}
                            name={k + "resultado"}
                            id={`${k}`}
                            onChange={() => handleOnChange(k, "home")}
                          />
                          {i.time_home}
                        </div>
                      </label>
                      <label htmlFor={`${k}1`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "draw" ? "#781010" : "",
                            color: i.result === "draw" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"draw"}
                            name={k + "resultado"}
                            id={`${k}1`}
                            onChange={() => handleOnChange(k, "draw")}
                          />
                          Empate
                        </div>
                      </label>
                      <label htmlFor={`${k}2`}>
                        <div
                          className="time"
                          style={{
                            backgroundColor:
                              i.result === "away" ? "#781010" : "",
                            color: i.result === "away" ? "#FFF" : "",
                          }}
                        >
                          <input
                            type="radio"
                            value={"away"}
                            name={k + "resultado"}
                            id={`${k}2`}
                            selected={i.result === "away"}
                            onChange={() => handleOnChange(k, "away")}
                          />
                          {i.time_away}
                        </div>
                      </label>
                    </div>
                  ))}
              </div>
            </PageArea>
            <SendButtonArea>
              <SendButton onClick={handleSendButton}>Enviar apostas</SendButton>
              <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalInfos data={modalData} setStatus={setModalStatus} />
              </Modal>
            </SendButtonArea>
          </form>
        </>
      )}
      {(!isValid.isValid || isValid.error) && <Navigate to="/" replace />}
    </PageContainer>
  );
};

export default Page;
