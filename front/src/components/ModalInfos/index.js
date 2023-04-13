/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  ModalArea,
  ModalButtons,
  ModalDetails,
  ModalInfoArea,
  ModalTitle,
  ModalButton,
} from "./styled";

export default ({ data, setStatus }) => {
  const games = data;
  const handleCancelButton = () => {
    setStatus(false);
  };

  const handleConfirmation = () => {
    setStatus(false);
  };
  console.log(data);

  return (
    <Container>
      <ModalArea>
        <ModalInfoArea>
          <ModalDetails>
            <ModalTitle>Confirme as Apostas</ModalTitle>
            {games.map((item, index) => (
              <div key={index} className="modalgames">
                Jogo {index + 1}:{" "}
                <div
                  style={{ fontWeight: item.result === "home" ? "bold" : "" }}
                >
                  {item.teams.home}
                </div>
                <div
                  style={{ fontWeight: item.result === "draw" ? "bold" : "" }}
                >
                  X
                </div>
                <div
                  style={{ fontWeight: item.result === "away" ? "bold" : "" }}
                >
                  {item.teams.away}
                </div>
              </div>
            ))}
          </ModalDetails>
        </ModalInfoArea>
      </ModalArea>
      <ModalButtons>
        <ModalButton small={true} onClick={handleCancelButton}>
          Cancelar
        </ModalButton>
        <ModalButton onClick={handleConfirmation}>Confirmar</ModalButton>
      </ModalButtons>
    </Container>
  );
};
