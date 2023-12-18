import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: var(--galactic-blue);
  color: var(--lab-coat-white);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  font-family: "Arial", sans-serif;

  &:hover {
    background-color: var(--alien-green);
    color: var(--schrodinger-grey);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--portal-purple), 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;