import React, {useState} from 'react';
import styled from "styled-components";
import DropdownButton from "../../atoms/DropdownButton";
import DropdownItems from "../DropdownItems";

function Dropdown({
  items,
  onSelect
}) {
  const [areDropdownItemsVisible, setAreDropdownItemsVisible] = useState(false);
  const [dropdownItemValue, setDropdownItemValue] = useState(items && items[0].name);

  return(
    <Dropdown.Container>
      <DropdownButton onClick={handleDropdownButtonClick}>
        {dropdownItemValue}
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
  background-color: #000000;
  color: #FFFFFF;
`;

export default Dropdown;
