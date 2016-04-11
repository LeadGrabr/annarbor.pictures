import { default as React, Component, PropTypes } from 'react'
import { Close, Drawer, Fixed, NavItem, Toolbar } from 'rebass'
import { IndexLink } from 'react-router'
import { Flex } from 'reflexbox'
import { MainNav } from '.'

export default class Navbar extends Component {

    static contextTypes = {
        rebass: PropTypes.object.isRequired
    };

    state = {}

    render() {
        const { rebass: { colors } } = this.context
        const { drawer } = this.state
        return (
            <Fixed style={{ width: '100%' }}>
                <Toolbar>
                    <Flex
                        justify="center"
                        style={{
                            width: '100%'
                        }}
                    >
                        <NavItem
                            is={IndexLink}
                            onClick={() => this.setState({ drawer: true })}
                            style={{ fontWeight: 600 }}
                            to="/"
                        >
                            AnnArbor Pictures
                        </NavItem>
                    </Flex>
                    <Drawer
                        open={drawer}
                        style={{
                            color: colors.black
                        }}
                        width="100%"
                    >
                        <Flex justify="flex-end">
                            <Close onClick={() => this.setState({ drawer: false })}/>
                        </Flex>
                        <MainNav/>
                    </Drawer>
                </Toolbar>
            </Fixed>
        )
    }
}
