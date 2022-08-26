import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
