import styled from "styled-components";

export const PageArea = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .games {
    margin: 10px;
    .game {
      text-align: justify;
    }
    h3 {
      text-align: center;
      background-color: #47141d;
      border-radius: 10px;
      color: #fff;
      margin: 0;
      margin-bottom: 10px;
    }
  }
  .area--button {
    width: 1000px;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    padding-right: 30px;
    button {
      background-color: #47141d;
      width: 100px;
      border: 0;
      outline: 0;
      padding: 5px 10px;
      border-radius: 4px;
      color: #fff;
      font-size: 17px;
      cursor: pointer;

      &:hover {
        background-color: #781010;
      }
    }
  }
`;

export const DateLimit = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin-left: 50px;
  .date-limit-title {
    margin-right: 10px;
    font-size: 20px;
  }
`;
