import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  color: white;
  border: 0.05rem solid var(--lightBlue-color);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow-color)" : "var(--lightBlue-color)"};
  color: ${(props) =>
    props.cart ? "var(--mainYellow-color)" : "var(--lightBlue-color)"};
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: 0.5s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow-color)" : "var(--lightBlue-color)"};
    color: var(--mainBlue-color);
  }
`;
