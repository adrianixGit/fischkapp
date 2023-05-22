import styled from "styled-components";

interface BackCardPropTypes {
  cardStatus: boolean;
}

export const StyledBackCard = styled.div<BackCardPropTypes>`
  margin: 9vh auto auto auto;
  display: ${({ cardStatus }) => (cardStatus ? "none" : "true")};
  width: 95vw;
  min-height: 20vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 20px 34px rgba(152, 163, 207, 0.3);
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
