import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewChar from '../TComponent'

class P2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('click')
        let locCount = this.state.count
        this.setState({
            count: ++locCount,
        })
    }

    render() {
        // const arrChar = this.props.world.split('')
        return (
            <div>
                <ViewChar
                    char={this.props.world[this.state.count]}
                    onClick={this.handleClick}
                />
                <ViewChar
                    char={this.props.world[this.state.count]}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}

P2.propTypes = {
    world: PropTypes.string.isRequired,
}

export default P2