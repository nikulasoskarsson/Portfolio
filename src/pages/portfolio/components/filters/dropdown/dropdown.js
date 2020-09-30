import React from "react"
import {
  StyledDropdown,
  StyledDropdownHeader,
} from "../../../../../components/styled-components/misc"
import DropdownItem from "./dropdownitem"

const Dropdown = () => {
  const placementFilters = ["Design", "Frontend", "Backend", "Mobile"]
  return (
    <StyledDropdown>
      <StyledDropdownHeader>Project type</StyledDropdownHeader>
      {placementFilters.map(filter => (
        <DropdownItem filter={filter} />
      ))}
    </StyledDropdown>
  )
}

export default Dropdown
