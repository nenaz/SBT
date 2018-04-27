import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ViewChar from '../TComponent'

class P2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: -1,
            number2: -1,
        }

        this.handleClickEl1 = this.handleClickEl1.bind(this)
        this.handleClickEl2 = this.handleClickEl2.bind(this)
    }

    handleClickEl1() {
        let locCount = (this.state.number2 >= this.state.number1)
            ? this.state.number2
            : this.state.number1
        locCount += 1
        if (locCount >= this.props.world.length) {
            locCount = 0
        }
        this.setState({
            number1: locCount,
        })
    }

    handleClickEl2() {
        let locCount = (this.state.number1 >= this.state.number2)
            ? this.state.number1
            : this.state.number2
        locCount += 1
        if (locCount >= this.props.world.length) {
            locCount = 0
        }
        this.setState({
            number2: locCount,
        })
    }

    render() {
        return (
            <div>
                <ViewChar
                    char={this.props.world[this.state.number1]}
                    onClick={this.handleClickEl1}
                />
                <ViewChar
                    char={this.props.world[this.state.number2]}
                    onClick={this.handleClickEl2}
                />
            </div>
        )
    }
}

P2.propTypes = {
    world: PropTypes.string.isRequired,
}

export default P2