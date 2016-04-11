import { default as React } from 'react'
import { Menu, NavItem } from 'rebass'
import { Link } from 'react-router'

const MainNav = () =>
    <Menu>
        <NavItem
            is={Link}
            to="/"
        >
            Home
        </NavItem>
        <NavItem
            is={Link}
            to="/about"
        >
            About Us
        </NavItem>
        <NavItem
            is={Link}
            to="/gallery"
        >
            Photo Gallery
        </NavItem>
        <NavItem>
            Blog
        </NavItem>
        <NavItem>
            Contact
        </NavItem>
    </Menu>

export default MainNav
