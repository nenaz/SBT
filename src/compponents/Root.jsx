import React, { Component } from 'react'
import P1 from './P1'
import P2 from './P2'
import { object } from '../js/utils'

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            world: 'HELLO',
        }
        this.parseUrlParams = this.parseUrlParams.bind(this)
        this.handleCheckboxToggleUpper = this.handleCheckboxToggleUpper.bind(this)
        this.handleCheckboxToggleReverse = this.handleCheckboxToggleReverse.bind(this)
    }

    componentWillMount() {
        this.parseUrlParams()
    }

    handleCheckboxToggleUpper(e) {
        const value = (e.target.checked) 
            ? object.toUpper().getValue()
            : object.toLower().getValue()
        this.setState({
            world: value
        })
    }

    handleCheckboxToggleReverse(e) {
        const value = object.toReverse().getValue()
        this.setState({
            world: value
        })
    }

    parseUrlParams() {
        const searchParams = new URLSearchParams(window.location.search.substring(1))
        const newWorld = searchParams.get('world')
        const world = this.state.world
        this.setState({
            world: (newWorld) ? newWorld : world
        }, () => {
            object.setValue(this.state.world)
        })
    }

    render() {
        return (
            <section>
                <div>
                    <input
                        type="checkbox"
                        id="nzUpper"
                        onClick={this.handleCheckboxToggleUpper}
                    />
                    <label htmlFor="nzUpper">Upper</label>
                    <input
                        type="checkbox"
                        id="nzReverse"
                        onClick={this.handleCheckboxToggleReverse}
                    />
                    <label htmlFor="nzReverse">Reverse</label>
                </div>
                <P1 world={this.state.world} />
                <P2 world={this.state.world} />
            </section>
        )
    }
}

export default Root