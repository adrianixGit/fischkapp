import styled, { keyframes } from "styled-components";

type StyledCardPropType = {
  isAnimate?: boolean;
};

const flipAnimation = keyframes`
  0% {
    width: 100%;
    
  }
  50% {
    width: 0%;
    opacity: 0;
    
  }
  51% {
    width: 0%;
    opacity: 1;
    
  }
  100% {
    width: 100%;
    
  }
`;

export const StyledCard = styled.div<StyledCardPropType>`
  margin: 1vh auto;
  display: flex;
  width: 95vw;
  min-height: 20vh;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 20px 34px rgba(152, 163, 207, 0.3);
  z-index: 999;
  animation: ${({ isAnimate }) => (isAnimate ? flipAnimation : "none")} 2s
    ease-in-out;
`;

export const StyledCardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const StyledTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
