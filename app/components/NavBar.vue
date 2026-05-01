<template>
  <BNavbar
    toggleable="lg"
  >
    <BNavbarBrand href="#">Kenton Johnson</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem href="/">Home</BNavItem>
        <BNavItem href="/about">About</BNavItem>
        <BNavItem href="/projects">Projects</BNavItem>
        <BNavItem href="/contact">Contact</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>