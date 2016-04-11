import React, { PropTypes } from 'react'
import { Textarea } from 'rebass'

const JoifulInputTextarea = ({ error, ...props }, { rebass: { colors } }) =>
    <Textarea
        {...props}
        message={error}
        rounded
        style={{
            borderColor: error ? colors.warning : 'transparent'
        }}
    />

JoifulInputTextarea.propTypes = {
    error: PropTypes.string
}

JoifulInputTextarea.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default JoifulInputTextarea
