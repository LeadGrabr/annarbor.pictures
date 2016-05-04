/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Banner, Base, Heading, Text } from 'rebass'
import { default as weddingSelfie } from './wedding-selfie.jpg'
import { default as color } from 'color'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { SUBMIT_LEAD, submitLead } from 'redux/modules/app'
import { Flex, Box } from 'reflexbox'
import { Pulse } from 'better-react-spinkit'

@connect(
    ({ app: { width } }) => ({ width }),
    { submit: submitLead }
)

export default class HomeBanner extends Component {

    static contextTypes = {
        breakpoints: PropTypes.object.isRequired,
        rebass: PropTypes.object.isRequired
    };

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired
    };

    state = {
        formValues: null
    }

    handleSuccess() {
        this.setState({
            formValues: {
                name: null,
                email: null,
                phone: null,
                message: null
            }
        })
    }

    render() {
        const { statuses, submit, width } = this.props
        const { breakpoints: { large }, rebass: { colors } } = this.context
        const { formValues } = this.state
        const backgroundColor = color(colors.black).alpha(0.7).rgbString()
        const isMobile = width < large
        const boxWidth = isMobile ? '100%' : '50%'
        return (
            <Banner
                align="center"
                backgroundImage={weddingSelfie}
                p={2}
                style={{
                    backgroundPosition: '27%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: 900
                }}
            >
                <If condition={width}>
                    <Flex
                        align={isMobile ? 'center' : 'flex-start'}
                        column={isMobile}
                    >
                        <Box
                            auto
                            mb={2}
                            mx={isMobile ? 0 : 2}
                            p={2}
                            style={{
                                backgroundColor,
                                width: boxWidth
                            }}
                        >
                            <Heading level={1}>
                                30 years of Experience Combine<br/>
                                to Get you the Perfect Shot
                            </Heading>
                            <Text>
                                Our photographers have over 30 years of
                                combined experience to help get you the
                                perfect shot.
                            </Text>
                        </Box>
                        <Box
                            style={{
                                backgroundColor,
                                width: boxWidth
                            }}
                        >
                            <Base
                                p={2}
                                rounded
                            >
                                <Heading
                                    level={2}
                                    mb={2}
                                >
                                    Show me an instant quote
                                </Heading>
                                <div style={{ textAlign: 'left' }}>
                                    <LeadForm
                                        buttonProps={{
                                            theme: 'primary'
                                        }}
                                        messageProps={{
                                            label: 'Breifly describe your event'
                                        }}
                                        onSuccess={::this.handleSuccess}
                                        status={statuses[SUBMIT_LEAD]}
                                        submit={submit}
                                        theme="secondary"
                                        values={formValues}
                                    />
                                    <Text mb={0}>
                                        *No purchase necessary
                                    </Text>
                                </div>
                            </Base>
                        </Box>
                    </Flex>
                    <Else/>
                    <Pulse/>
                </If>
            </Banner>
        )
    }
}
