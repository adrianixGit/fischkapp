import styled, { keyframes } from "styled-components";

export const StyledInput = styled.input`
  margin-top: 7vh;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bluegray};
  outline: none;
  height: 5vh;
  font-size: 16px;
  padding-left: 10px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.5vh;
`;

export const StyledControlCardPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;

  p {
    color: ${({ theme }) => theme.colors.bluegray};
    font-size: 12px;
    font-weight: 500;
  }
`;
