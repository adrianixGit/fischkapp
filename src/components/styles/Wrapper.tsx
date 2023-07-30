import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  height: 100vh;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
