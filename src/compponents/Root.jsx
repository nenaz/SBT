import React, { Component } from 'react'
import ViewChar from './TComponent/'

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
        const arrChar = this.state.world.split('')
        // debugger
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

export default Root