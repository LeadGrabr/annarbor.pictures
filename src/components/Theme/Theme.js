import './style.scss'
import { Component, PropTypes } from 'react'
// import Color from 'color'

const baseColors = {
    black: '#111',
    white: '#fff',
    gray: '#ddd',
    midgray: '#888',
    blue: '#44749d',
    lightBlue: '#c6d4e1',
    red: '#f52',
    orange: '#f70',
    green: '#1c7',
    pink: '#e5b9b3'
}

const colors = {
    ...baseColors,
    primary: baseColors.pink,
    secondary: baseColors.lightBlue,
    default: baseColors.white,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 37, 27, 19, 18, 12, 11]

export default class Theme extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    static childContextTypes = {
        rebass: PropTypes.object,
        reflexbox: PropTypes.object
    };

    getChildContext() {
        return {
            rebass: {
                colors,
                fontSizes,
                scale,
                Badge: {
                    fontWeight: 'lighter'
                },
                Button: {
                    color: colors.black
                },
                Drawer: {
                    overflow: 'auto'
                },
                Input: {
                    fontSize: fontSizes[5]
                },
                Label: {
                    display: 'block',
                    marginBottom: 10
                },
                NavItem: {
                    fontWeight: 200
                },
                Text: {
                    marginBottom: scale[2],
                    marginTop: scale[2]
                },
                Textarea: {
                    fontSize: fontSizes[5]
                },
                Toolbar: {
                    backgroundColor: colors.white,
                    color: colors.black
                }
            },
            reflexbox: {
                scale
            }
        }
    }

    render() {
        return this.props.children
    }
}
