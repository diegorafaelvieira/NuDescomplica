import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;

  div {
    height: 320px;
    width: 230px;
    border:  1px solid rgb(194, 193, 193);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    button {
      font-size: 25px;
      background: transparent;
      border: none;
      color: #2A8C82;
    }
  }
`; 


export const HeaderArea =  styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #2A8C82;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #260101;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
