import React, { Component } from 'react'
import P1 from './P1'

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            world: 'HELLO',
        }
        this.parseUrlParams = this.parseUrlParams.bind(this)
    }

    componentWillMount() {
        this.parseUrlParams()
    }

    parseUrlParams() {
        const searchParams = new URLSearchParams(window.location.search.substring(1))
        const newWorld = searchParams.get('world')
        const world = this.state.world
        this.setState({
            world: (newWorld) ? newWorld : world
        })
    }

    render() {
        return (
            <div>
                <P1 world={this.state.world} />
            </div>
        )
    }
}

export default Root