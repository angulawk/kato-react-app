import React from 'react';
import styled from "styled-components";

const DropdownIcon = ({
  icon
}) => (
  <DropdownIcon.Container data-testid='dropdownIcon'>
    <i className={icon}></i>
  </DropdownIcon.Container>
);

DropdownIcon.Container = styled.span`
  transform: rotate(45deg);
  border: solid #FFFFFF;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

export default DropdownIcon;
