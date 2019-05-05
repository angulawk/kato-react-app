import React, { useState } from 'react';
import styled from "styled-components";
import DropdownButton from "../../atoms/DropdownButton";
import DropdownItems from "../DropdownItems";
import DropdownIcon from "../../atoms/DropdownIcon";

function Dropdown({
  items,
  onSelect,
  placeholder
}) {
  const [areDropdownItemsVisible, setAreDropdownItemsVisible] = useState(false);
  const [dropdownItemValue, setDropdownItemValue] = useState(placeholder);

  return(
    <Dropdown.Container data-testid='dropdown'>
      <DropdownButton onClick={handleDropdownButtonClick}>
        {dropdownItemValue}
        <DropdownIcon icon="arrowDown" />
      </DropdownButton>
      {areDropdownItemsVisible &&
        <DropdownItems onSelect={handleDropdownItemsSelect} items={items} />
      }
    </Dropdown.Container>
  );

  function handleDropdownButtonClick() {
    setAreDropdownItemsVisible(true);
  }

  function handleDropdownItemsSelect(selectedItemValue) {
    setDropdownItemValue(selectedItemValue);
    setAreDropdownItemsVisible(false);
    onSelect(selectedItemValue);
  }
}

Dropdown.Container = styled.div`
  margin: 0 auto;
  width: 200px;
`;

export default Dropdown;
