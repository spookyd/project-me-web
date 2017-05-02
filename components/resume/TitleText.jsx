import React from 'react'

export default class TitleText extends React.Component {
    render () {
        return (
            <div className="">
                <h3>{this.props.title}</h3>
                <div className="divider"/>
            </div>
        )
    }
}