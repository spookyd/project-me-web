import React from 'react'

export default class Summary extends React.Component {
    render () {
        return (
            <div id="summary" className="center">
                <img src={this.props.image} className="round"/>
                <h1>{this.props.name}</h1>
                <h2>{this.props.label}</h2>
            </div>
        )
    }
}