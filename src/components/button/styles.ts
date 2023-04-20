/**
 * IMPORTS
 */
import { darken } from 'polished';
import styled from 'styled-components';


export const StyButton = styled.button`
  background: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  transition: all ease-in-out 0.2s;

  &.outlined{
    background: none;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:hover{
    background: ${({ theme }) => darken(0.1, theme.secondary)};
  }

  &[disabled] {
    cursor: default;
  }
`;
