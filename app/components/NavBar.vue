<template>
  <BNavbar
    toggleable="lg"
  >
    <BNavbarBrand href="#">Kenton Johnson</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem to="/">Home</BNavItem>
        <BNavItem to="/about">About</BNavItem>
        <BNavItemDropdown text="Projects">
          <BDropdownItem to="/projects/test">test</BDropdownItem>
          <BDropdownItem>TODO</BDropdownItem>
          <BDropdownItem>TODO</BDropdownItem>
          <BDropdownItem>TOD</BDropdownItem>
        </BNavItemDropdown>
        <BNavItem href="/contact">Contact</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>