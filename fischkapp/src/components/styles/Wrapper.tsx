import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
`;
