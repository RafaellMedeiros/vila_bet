import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  padding: 20px;
`;

export const ModalArea = styled.div`
  height: 200px;
  display: flex;
`;

export const ModalButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ModalDetails = styled.div`
  .modalgames {
    display: flex;
  }
`;

export const ModalTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ModalButton = styled.button`
  border: 0;
  background-color: #073c07;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: ${(props) => (props.small ? "13px" : "22px")};
  font-weight: bold;
  padding: ${(props) => (props.small ? "5px 10" : "10px 20px")};
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
