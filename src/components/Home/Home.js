import { default as React } from 'react'
import { Base, Heading, Text } from 'rebass'
import { Page, GoogleMap } from '..'
import { default as Banner } from './Banner'
import { Gallery } from '../Gallery'

const Home = () =>
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
                Check out some of the latest and greatest
                photographs from photographers right here in Ann Arbor.
            </Text>
            <Gallery size={87}/>
        </Page.Content>
        <Base mb={2}>
            <GoogleMap style={{ height: 300 }}/>
        </Base>
    </Page>

export default Home
