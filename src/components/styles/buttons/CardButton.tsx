import styled from "styled-components";

interface StyledCardButtonProps {
  bg?: string;
}

export const StyledCardButton = styled.button<StyledCardButtonProps>`
  padding: 10px;
  background-color: ${({ theme, bg }) =>
    bg == "violet" ? theme.colors.bluegray : theme.colors.white};
  border-radius: 16px;
  width: 110px;
  border: 1px solid ${({ theme }) => theme.colors.bluegray};
  color: ${({ theme, bg }) =>
    bg == "violet" ? theme.colors.white : theme.colors.bluegray};
  cursor: pointer;
`;
