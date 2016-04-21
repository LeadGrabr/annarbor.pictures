/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { default as About } from './About'
import { Page } from 'components'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { Section, SectionHeader, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Gallery } from '@leadgrabr/gallery'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { medium } = constants.BREAKPOINTS
const { SUBMIT_LEAD } = constants

@connect(
    (state) => ({
        width: state.app.width
    }),
    { submit: createLead }
)

export default class AboutContainer extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired
    };

    render() {
        const { statuses, submit, width } = this.props
        const contactBoxProps = {
            mb: 2,
            style: {
                width: width > medium ? '50%' : '100%'
            }
        }
        return (
            <Page>
                <Page.Title>
                    About Ann Arbor Pictures
                </Page.Title>
                <Page.Content>
                    <Section>
                        <About/>
                    </Section>
                    <Section>
                        <Gallery
                            imgProps={{
                                m: 2 // eslint-disable-line id-length
                            }}
                            photos={[
                                'C7gNqbkKOtE',
                                'm5lNqXBBIy0',
                                'yB-fV93YL54',
                                '7bVMdNYzH_8'
                            ]}
                            size={150}
                        />
                    </Section>
                    <Section>
                        <Flex column={!(width > medium)}>
                            <Box
                                {...contactBoxProps}
                                pr={width > medium ? 2 : 0}
                            >
                                <SectionHeader
                                    heading="Contact us today"
                                    m={0}
                                    style={{ textAlign: 'left' }}
                                />
                                <Text>
                                    Et his feugait denique appellantur. Meis euismod no mel, at
                                    oblique praesent est, quo cu paulo debitis postulant. Cu agam
                                    hendrerit vix, clita omnium verterem ei qui. Vel in decore
                                    mediocritatem, dicam graece urbanitas his cu.
                                </Text>
                                <Text>
                                    Te dolor nullam nonumes his. Sit natum postea accusata te,
                                    appetere dissentiet has te, id exerci labores pertinax nec.
                                    In vel invenire delicatissimi, nam diceret civibus ex. Cu
                                    omnes mucius est, qui ei dico eripuit.
                                </Text>
                                <Text>
                                    Ea habemus quaerendum usu, et eam dicat invenire salutandi,
                                    ei mel reque iuvaret commune. Nec no congue exerci. Pro ei
                                    putant expetenda deterruisset, te mutat tempor neglegentur
                                    his. At modo facer ubique sea, te vidit latine eleifend eam.
                                </Text>
                            </Box>
                            <Box
                                {...contactBoxProps}
                                pl={width > medium ? 2 : 0}
                            >
                                <LeadForm
                                    status={statuses[SUBMIT_LEAD]}
                                    submit={submit}
                                />
                            </Box>
                        </Flex>
                    </Section>
                </Page.Content>
            </Page>
        )
    }
}
