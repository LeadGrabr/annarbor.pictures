import { default as React } from 'react'
import { NavItem } from 'rebass'
import { Link } from 'react-router'
import { Flex } from 'reflexbox'

const MainNav = (props) =>
    <Flex {...props}>
        <NavItem
            is={Link}
            to="/about"
        >
            About
        </NavItem>
        <NavItem
            is={Link}
            to="/gallery"
        >
            Gallery
        </NavItem>
        <NavItem
            is={Link}
            to="/contact"
        >
            Contact
        </NavItem>
    </Flex>

export default MainNav
