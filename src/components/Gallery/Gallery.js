/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Base } from 'rebass'
import { Flex } from 'reflexbox'
import { connect } from 'react-redux'

const photos = [
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
]

@connect((state) => ({ screenWidth: state.app.width }))

export default class Gallery extends Component {

    static defaultProps = {
        size: 300
    };

    static propTypes = {
        screenWidth: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired
    };

    render() {
        const { size, ...props } = this.props
        // const imgSize = width > small ? 280 : 100
        return (
            <Base {...props}>
                <Flex
                    justify="center"
                    wrap
                >
                    {photos.map((photo, key) =>
                        <Base
                            key={key}
                            style={{
                                backgroundImage: `url('//source.unsplash.com/${photo}/280x280')`,
                                backgroundSize: 'cover',
                                height: size,
                                width: size,
                            }}
                        />
                    )}
                </Flex>
            </Base>
        )
    }
}
