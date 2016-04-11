import React, { Component, PropTypes } from 'react'
import { Base, Button } from 'rebass'
import { connect } from 'redux-await'
import { createLead, constants } from '../../redux/modules/app'
import autobind from 'autobind-decorator'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import Joi from 'joi'
const { SUBMIT_LEAD } = constants
import { Flex } from 'reflexbox'

@connect(() => ({}), { submit: createLead })

export default class ContactForm extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    state = {}

    @autobind
    handleSubmit(error) {
        if (error) {
            return false
        }

        return this.props.submit(this.state)
    }

    @autobind
    handleChange(event, formValues) {
        this.setState(formValues)
    }

    render() {
        const { statuses, ...props } = this.props
        const pending = statuses[SUBMIT_LEAD] === 'pending'
        return (
            <Base {...props}>
                <JoifulForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    schema={{
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        phone: Joi.string().min(10).max(12),
                        message: Joi.string().min(3)
                    }}
                    values={this.state}
                >
                    <JoifulInput
                        label="Name"
                        name="name"
                    />
                    <JoifulInput
                        label="Email"
                        name="email"
                    />
                    <JoifulInput
                        label="Phone"
                        name="phone"
                    />
                    <JoifulInput
                        is="textarea"
                        label="Message"
                        name="message"
                    />
                    <Button
                        backgroundColor="primary"
                        disabled={pending}
                        onClick={this.handleSubmit}
                        style={{ width: '100%' }}
                    >
                        <If condition={pending}>
                            <Flex justify="center">
                                Processing...
                            </Flex>
                        <Else/>
                            Submit
                        </If>
                    </Button>
                </JoifulForm>
            </Base>
        )
    }

}
