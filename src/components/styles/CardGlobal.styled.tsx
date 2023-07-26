import styled, { keyframes } from "styled-components";

type StyledCardPropType = {
  isAnimate?: boolean;
};

type StyledTextContainerType = {
  textLength?: number;
};

const flipAnimation = keyframes`
  0% {
    width: 100%;
    color: transparent;
  }
  50% {
    width: 0%;
    color: transparent;
  }
  51% {
    width: 0%;
    color: transparent;
  }
  100% {
    width: 100%;
  }
`;

export const StyledCard = styled.div<StyledCardPropType>`
  margin: 1vh auto;
  display: flex;
  width: 95%;
  min-height: 20vh;
  max-height: 20vh;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 20px 34px rgba(152, 163, 207, 0.3);
  animation: ${({ isAnimate }) => (isAnimate ? flipAnimation : "none")} 1s
    ease-in-out;
`;

export const StyledCardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const StyledTextContainer = styled.div<StyledTextContainerType>`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: ${({ textLength }) =>
    textLength && textLength > 400 ? "flex-start" : "center"};
  text-align: center;
  overflow-y: auto;
`;
