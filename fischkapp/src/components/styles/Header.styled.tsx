import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 9vh;
  position: fixed;
  padding: 2.5vh;
  box-shadow: 0px -16px 52px -10px rgba(152, 163, 207, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__logo {
    display: flex;
    height: 100%;
    align-items: center;

    .header__logoName {
    }

    .header__cardsNumber {
      font-size: 25px;
      margin-left: 0.5vw;
      color: #98a3cf;
    }
  }

  button {
    height: 6vh;
    width: 6vh;
    border-radius: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #98a3cf;
    box-shadow: 0px 34px 100px -65px rgba(152, 163, 207, 1);
    cursor: pointer;
    p {
      border: 1px solid white;
      border-radius: 100%;
      width: 3vh;
      height: 3vh;
      position: relative;
      &::before {
        content: "";
        width: 1px;
        height: 2vh;
        background-color: white;
        position: absolute;
        top: calc(50% - 1vh);
      }
      &::after {
        content: "";
        width: 2vh;
        height: 1px;
        background-color: white;
        position: absolute;
        top: 50%;
        left: calc(50% - 1vh);
      }
    }
  }
`;
