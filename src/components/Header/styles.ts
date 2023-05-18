import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 3.5rem 7.5rem 6rem 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
      width: 2.5rem;
    }

    > h1 {
      font-size: 1.625rem;
    }
  }

  > button {
    padding: 0.75rem 1.25rem;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    border: none;
    font-weight: bold;
    border-radius: 6px;

    cursor: pointer;

    &:hover {
      transition: background-color 0.2s;
      background: ${(props) => props.theme['green-700']};
    }
  }
`
