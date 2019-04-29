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
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #66a0ff;
  color: #FFFFFF;
`;

export default DropdownButton;
