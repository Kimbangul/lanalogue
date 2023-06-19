import styled, {css} from "styled-components"

const PaginationStyle = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 0 0.8rem;
  `,
  Button: styled.button<{active: boolean}>`
    cursor: pointer;
    width: 3.6rem;
    height: 3.6rem;
    background: #ffffff10;
    transition: background 0.3s;
    border-radius: 0.4rem;
    color: ${props => props.theme.color.white01};
    box-shadow: 0 0.5rem 0.5rem rgba(0,0,0,0.2);

    &:hover{
      background: #ffffff20;
    }

    ${
      props => props.active &&
      css`background: #ffffff40;`
    }
  `,
}

export default PaginationStyle;