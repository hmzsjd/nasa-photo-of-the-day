import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from 'reactstrap';

export let DATE = "";

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Choose a Date:
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => DATE="&date=2021-09-01"}>1st Sep 2021</DropdownItem>
        <DropdownItem onClick={() => DATE="&date=2021-09-02"}>2nd Sep 2021</DropdownItem>
        <DropdownItem onClick={() => DATE="&date=2021-09-03"}>3rd Sep 2021</DropdownItem>
        <DropdownItem onClick={() => DATE="&date=2021-09-04"}>4th Sep 2021</DropdownItem>
        <DropdownItem onClick={() => DATE="&date=2021-09-05"}>5th Sep 2021</DropdownItem>




      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;