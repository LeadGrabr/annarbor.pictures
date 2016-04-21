/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Page } from 'components'
import { default as Gallery } from '@leadgrabr/gallery'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { SUBMIT_LEAD } = constants

@connect(() => ({}), { submit: createLead })

export default class Contact extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    render() {
        const { statuses, submit } = this.props
        return (
            <Page>
                <Page.Title>
                    Contact us today
                </Page.Title>
                <Page.Content>
                    <LeadForm
                        status={statuses[SUBMIT_LEAD]}
                        submit={submit}
                    />
                    <Gallery
                        photos={[
                            '51QcRqMjy6w',
                            'v3QeAZjxxtY',
                            'EeDaZ4So3R0',
                            'bNGdS51jAoE',
                            '70RHiKO9kj8',
                            'C7gNqbkKOtE',
                            'm5lNqXBBIy0',
                            'yB-fV93YL54',
                            '7bVMdNYzH_8',
                            '_BLx6ystEhk',
                            'pcbuJpqHUak',
                            'jjj1rHyYyG0'
                        ]}
                    />
                </Page.Content>
            </Page>
        )
    }
}
