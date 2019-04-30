import React from 'react';
import styled from "styled-components";

function DropdownItem({
  children,
  onClick
}) {
  return(
    <DropdownItem.Container onClick={handleClick} data-testid='dropdownItem'>
      {children}
    </DropdownItem.Container>
  );

  function handleClick() {
    onClick(children);
  }
}

DropdownItem.Container = styled.div`
  border-top: 1px solid #FFFFFF;
  padding: 10px 20px;
  font-family: sans-serif;
  background-color: #66a0ff;
  color: #FFFFFF;
`;

export default DropdownItem;
