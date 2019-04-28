import React from 'react';
import styled from "styled-components";

const DropdownButton = ({
  children,
  onClick
}) => (
  <DropdownButton.Container onClick={onClick} data-testid='dropdownButton'>
    {children}
  </DropdownButton.Container>
);

DropdownButton.Container = styled.button`
  background-color: #000000;
  color: #FFFFFF;
`;

export default DropdownButton;
