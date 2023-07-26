import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 7vh;
  position: fixed;
  left: 0;
  padding: 2.5vh;
  box-shadow: 0px 0px 34px rgba(152, 163, 207, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
`;

export const StyledLogo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  h1 {
    font-size: 3vh;
  }

  p {
    font-size: 3vh;
    margin-left: 0.5vw;
    color: ${({ theme }) => theme.colors.bluegray};
  }
`;
