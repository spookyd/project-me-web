import React from 'react'

export default class Social extends React.Component {
    render () {
        return (
            <div className="social row">
                <a href={this.props.link} className="col-12 caption">
                    <img src={this.props.image} alt={this.props.title} className=""/>
                    {this.props.title}
                </a>
            </div>
        )
    }
}