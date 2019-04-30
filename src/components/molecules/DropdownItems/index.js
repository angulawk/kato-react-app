import React from 'react';
import DropdownItem from "../../atoms/DropdownItem";

function DropdownItems({
  items,
  onSelect
}) {
  return(
    <div data-testid='dropdownItems'>
      {renderDropdownItem()}
    </div>
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

export default DropdownItems;
