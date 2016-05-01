import { default as React, Component, PropTypes } from 'react'
import { Theme } from '.'
import { default as Helmet } from 'react-helmet'
import { setScreenSize } from '../redux/modules/app'
import { connect } from 'react-redux'
import { default as joifulReactForms } from './JoifulReactForms'

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

    static propTypes = {
        children: PropTypes.node,
        screenSize: PropTypes.func.isRequired
    };

    static childContextTypes = {
        joifulReactForms: PropTypes.object
    };

    getChildContext() {
        return {
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
                height: $(window).height(),
                width: $(window).width()
            })
        )
        screenSize({
            height: $(window).height(),
            width: $(window).width()
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
                        { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' },
                        { type: 'application/ld+json', innerHTML: `{
                          "@context": "http://www.schema.org",
                          "@type": "ProfessionalService",
                          "name": "Ann Arbor Pictures",
                          "url": "http://annarbor.pictures",
                          "description": "Wedding and event photographers that cater to you and your style. Ann Arbor Pictures is the Washtenaw leader in wedding photography and video.",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "847 Sumpter Road #411",
                            "addressLocality": "Belleville",
                            "addressRegion": "MI",
                            "postalCode": "48111",
                            "addressCountry": "US"
                          },
                          "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 08:00-22:00",
                          "priceRange": "$$",
                          "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "12"
                          },
                          "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "734-887-1188"
                          },
                          "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "42.195199",
                            "longitude": "-83.483737"
                          },
                        }` }
                        /* eslint-enable max-len */
                    ]}
                    title="Ann Arbor Pictures"
                />
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
