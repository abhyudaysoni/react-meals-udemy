import styled from "styled-components";

export const Summary = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  .summary h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`;

export const Available = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #loading {
    height: 100px;
    width: 100%;
    border-radius: 10px;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
