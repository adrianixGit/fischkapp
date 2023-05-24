import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: block;
  width: 95vw;
  min-height: 20vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 20px 34px rgba(152, 163, 207, 0.3);
`;

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

  p {
    color: ${({ theme }) => theme.colors.bluegray};
    font-size: 12px;
    font-weight: 500;
  }
`;