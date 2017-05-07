import React from 'react'

export default class Contact extends React.Component {
    render () {
        return (
            <div className="contact-item row">
                <img src={this.props.image} alt={this.props.title} className="col-2"/>
                <a href={this.props.link} className="col-10 caption">{this.props.title}</a>
            </div>
        )
    }
}