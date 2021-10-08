import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Choose a Date:
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => alert("test")}>1st Sep 2021</DropdownItem>
        <DropdownItem value="21">2nd Sep 2021</DropdownItem>
        <DropdownItem>3rd Sep 2021</DropdownItem>
        <DropdownItem>4th Sep 2021</DropdownItem>
        <DropdownItem>5th Sep 2021</DropdownItem>



      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;