import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 7vh;
  position: fixed;
  padding: 2.5vh;
  box-shadow: 0px -16px 52px -10px rgba(152, 163, 207, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
