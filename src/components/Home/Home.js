/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Heading, Section, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from '@leadgrabr/gallery'
import { default as Testimonials } from '@leadgrabr/testimonials'
import { default as BrandBadges } from '@leadgrabr/brand-badges'
import { default as Heart } from 'react-icons/lib/go/heart'
import { default as Location } from 'react-icons/lib/go/location'
import { default as AssignmentTurnedIn } from 'react-icons/lib/md/assignment-turned-in'
import { connect } from 'react-redux'
import { default as joe } from 'components/Testimonials/joe'
import { default as john } from 'components/Testimonials/john'
import { default as barbara } from 'components/Testimonials/barbara'

@connect(({ app: { width } }) => ({ width }))

export default class Home extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    static contextTypes = {
        rebass: PropTypes.object.isRequired
    };

    render() {
        const { rebass: { colors } } = this.context
        return (
            <Page>
                <Banner/>
                <Page.Content>
                    <Section>
                        <Heading
                            level={2}
                            mb={2}
                            style={{ textAlign: 'center' }}
                        >
                            Fall in Love with Ann Arbor Pictures!
                        </Heading>
                        <Text style={{ textAlign: 'center' }}>
                            Whether you're planning an engagement,
                            need lifestyle photography, or are just
                            looking to document your latest adventures,
                            Ann Arbor Pictures has the equipment and
                            the expertise to get you your perfect
                            image in a unique vintage style.
                        </Text>
                        <Gallery
                            imgProps={{
                                my: 1
                            }}
                            photos={[
                                '51QcRqMjy6w',
                                'v3QeAZjxxtY',
                                'EeDaZ4So3R0',
                                'bNGdS51jAoE',
                                '70RHiKO9kj8',
                                'C7gNqbkKOtE',
                            ]}
                            size={140}
                        />
                    </Section>
                    <Section>
                        <Testimonials
                            imgSize={80}
                            testimonials={[
                                {
                                    ...john,
                                    href: '/testimonials/john'
                                },
                                {
                                    ...barbara,
                                    href: '/testimonials/barbara'
                                },
                                {
                                    ...joe,
                                    href: '/testimonials/joe'
                                }
                            ]}
                            truncateTextAt={200}
                            width={this.props.width}
                        />
                    </Section>
                    <Section>
                        <BrandBadges
                            backgroundColor="primary"
                            badges={[
                                {
                                    heading: 'You\'ll love your photos',
                                    icon: <Heart
                                        size={60}
                                        style={{
                                            color: colors.white
                                        }}
                                    />
                                },
                                {
                                    heading: 'Guaranteed results',
                                    icon: <AssignmentTurnedIn
                                        size={60}
                                        style={{
                                            color: colors.white
                                        }}
                                    />
                                },
                                {
                                    heading: 'We\'re local!',
                                    icon: <Location
                                        size={60}
                                        style={{
                                            color: colors.white
                                        }}
                                    />
                                }
                            ]}
                        />
                    </Section>
                </Page.Content>
                <GoogleMap style={{ height: 300 }}/>
                <BottomBar/>
            </Page>
        )
    }
}
