import { default as React } from 'react'
import { Menu, NavItem } from 'rebass'
import { Link } from 'react-router'

const MainNav = () =>
    <Menu>
        <NavItem>
            About Us
        </NavItem>
        <NavItem>
            Our Photographers
        </NavItem>
        <NavItem
            is={Link}
            to="/gallery"
        >
            Pictures
        </NavItem>
        <NavItem>
            Blog
        </NavItem>
        <NavItem>
            Contact
        </NavItem>
    </Menu>

export default MainNav
