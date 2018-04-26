import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ViewChar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div
                style={{
                    border: '1px solid black',
                    backgroundColor: 'white',
                    display: 'inline-block',
                    margin: '0 3px',
                    padding: '3px'
                }}
                onClick={this.props.onClick}
            >
                <span>{this.props.char}</span>
            </div>
        )
    }
}

ViewChar.propTypes = {
    char: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default ViewChar