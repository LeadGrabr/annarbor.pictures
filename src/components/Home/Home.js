import { default as React, PropTypes } from 'react'
import { Base, Heading, Section, SectionHeader, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from 'Gallery'
import { default as About } from 'About'

const Home = (props, { rebass: { colors } }) =>
    <Page>
        <Banner/>
        <Page.Content>
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
                count={6}
                imgProps={{
                    m: 2 // eslint-disable-line id-length
                }}
                size={250}
            />
        </Page.Content>
        <Section style={{ backgroundColor: colors.info }}>
            <Page.Content>
                <SectionHeader
                    heading="Some other alternate heading"
                    style={{ textAlign: 'center' }}
                />
                <About/>
            </Page.Content>
        </Section>
        <Base>
            <GoogleMap style={{ height: 300 }}/>
        </Base>
        <BottomBar/>
    </Page>

Home.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default Home
