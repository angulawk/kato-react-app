import React from 'react';
import styled from "styled-components";

function DropdownIcon({
  icon
}) {
  switch (icon) {
    case 'arrowDown':
      DropdownIcon.Container = arrowDown;
      break;
    default:
      DropdownIcon.Container = arrowUp;
  }

  return (
    <DropdownIcon.Container
      data-testid='dropdownIcon'
      className={icon}
    />
  )
}

const arrowDown = styled.span`
  transform: rotate(45deg);
  border: solid #FFFFFF;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

const arrowUp = styled.span`
  transform: rotate(225deg);
  border: solid #FFFFFF;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

export default DropdownIcon;
