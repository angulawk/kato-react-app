import React from 'react';
import styled from "styled-components";

function DropdownItem({
  children,
  onClick
}) {
  return(
    <DropdownItem.Container onClick={handleClick}>
      {children}
    </DropdownItem.Container>
  );

  function handleClick() {
    onClick(children);
  }
}

DropdownItem.Container = styled.div`
  background-color: #000000;
  color: #FFFFFF;
`;

export default DropdownItem;
