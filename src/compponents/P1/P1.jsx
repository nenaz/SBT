import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewChar from '../TComponent'

class P1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const arrChar = this.props.world.split('')
        return (
            <div>
                {arrChar.map((char, key) => {
                    return (
                        <ViewChar key={key} char={char} />
                    )
                })}
            </div>
        )
    }
}

P1.propTypes = {
    world: PropTypes.string.isRequired,
}

export default P1