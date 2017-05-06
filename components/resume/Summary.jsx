import React from 'react'

export default class Summary extends React.Component {
    render () {
        return (
            <div id="summary" className="center">
                <img src={this.props.image} className="round"/>
                <h2>{this.props.name}</h2>
                <h3>{this.props.label}</h3>
            </div>
        )
    }
}