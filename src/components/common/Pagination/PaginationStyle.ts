import styled from "styled-components"

const PaginationStyle = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 0 0.8rem;
  `,
  Button: styled.button`
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    font-family: 'Noto Sans KR', sans-serif;
    background: #ffffff20;
    transition: background 0.3s;
    border-radius: 0.4rem;
    color: #fff;
    box-shadow: 0 0.5rem 0.5rem rgba(0,0,0,0.2);

    &:hover{
      background: #ffffff40;
    }
  `,
}

export default PaginationStyle;