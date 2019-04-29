import React from 'react';
import styled from "styled-components";
import DropdownItem from "../../atoms/DropdownItem";

function DropdownItems({
  items,
  onSelect
}) {
  return(
    <DropdownItems.Container data-testid='dropdownItems'>
      {items && renderDropdownItem()}
    </DropdownItems.Container>
  );

  function renderDropdownItem() {
    return items.map(({
      name
    }) => (
      <DropdownItem onClick={onSelect} key={name}>
        {name}
      </DropdownItem>
    ))
  }
}

DropdownItems.Container = styled.div`
  background-color: #000000;
  color: #FFFFFF;
`;

export default DropdownItems;
