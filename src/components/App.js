import { default as React, Component, PropTypes } from 'react'
import { Theme } from '.'
import { default as Helmet } from 'react-helmet'
import { setScreenSize } from '../redux/modules/app'
import { connect } from 'react-redux'
import { default as GoogleAnalytics } from 'react-g-analytics'
import { default as joifulReactForms } from './JoifulReactForms'
import { colors } from './Theme/Theme'

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

    static propTypes = {
        children: PropTypes.node,
        screenSize: PropTypes.func.isRequired
    };

    static childContextTypes = {
        betterReactSpinkit: PropTypes.object,
        joifulReactForms: PropTypes.object
    };

    getChildContext() {
        return {
            betterReactSpinkit: {
                color: colors.primary,
                size: 40
            },
            joifulReactForms: {
                JoifulInput: {
                    types: joifulReactForms.types
                }
            }
        }
    }

    componentDidMount() {
        // 🌎
        const { screenSize } = this.props
        window.addEventListener('resize', () =>
            screenSize({
                height: window.innerHeight || $(window).height(),
                width: window.innerWidth || $(window).width()
            })
        )
        screenSize({
            height: window.innerHeight || $(window).height(),
            width: window.innerWidth || $(window).width()
        })
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <Helmet
                    link={[
                        /* eslint-disable max-len */
                        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
                        { rel: 'stylesheet', href: '/style.css' },
                        { rel: 'shortcut icon', href: '/favicon.png' },
                        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Raleway:300,600' }
                    ]}
                    meta={[
                        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
                    ]}
                    script={[
                        { src: '//code.jquery.com/jquery-2.1.4.min.js' },
                        { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
                        /* eslint-enable max-len */
                    ]}
                    title="Ann Arbor Pictures"
                />
                <GoogleAnalytics id="UA-77116266-1" />
                <Theme>
                    <div
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%'
                        }}
                    >
                        {children}
                    </div>
                </Theme>
            </div>
        )
    }
}
