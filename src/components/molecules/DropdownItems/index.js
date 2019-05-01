import React from 'react';
import DropdownItem from "../../atoms/DropdownItem";
import styled from "styled-components";

function DropdownItems({
  items,
  onSelect
}) {
  return(
    <DropdownItems.Container data-testid='dropdownItems'>
      {renderDropdownItem()}
    </DropdownItems.Container>
  );

  function renderDropdownItem() {
    return (items.length > 0) && items.map(({
      name
    }) => (
      <DropdownItem onClick={onSelect} key={name}>
        {name}
      </DropdownItem>
    ))
  }
}

DropdownItems.Container = styled.div`
  position: absolute;
  width: 200px;
`

export default DropdownItems;
