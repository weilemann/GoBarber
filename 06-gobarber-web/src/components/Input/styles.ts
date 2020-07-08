import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    /* Cor de fundo do autocomplete */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }

    /* Cor do texto do autocomplete */
    &:-webkit-autofill {
      -webkit-text-fill-color: #f4ede8 !important;
    }

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
