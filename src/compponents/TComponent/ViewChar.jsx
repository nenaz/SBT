import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from '../../css/ViewChar.css'

class ViewChar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const textEl = (this.props.char)
            ? <span>{this.props.char}</span>
            : <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
        return (
            <div className={css.nzViewChar}
                onClick={this.props.onClick}
            >
                {textEl}
            </div>
        )
    }
}

ViewChar.propTypes = {
    char: PropTypes.string,
    onClick: PropTypes.func,
}

export default ViewChar