import React from 'react'

export default class Contact extends React.Component {
    render () {
        return (
            <div className="contact-item">
                <img src={this.props.image} className="col-1"/>
                <a href={this.props.link} className="col-11">{this.props.title}</a>
            </div>
        )
    }
}