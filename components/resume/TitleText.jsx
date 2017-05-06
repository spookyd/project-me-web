import React from 'react'

export default class TitleText extends React.Component {
    render () {
        return (
            <div className="">
                <h4>{this.props.title}</h4>
                <div className="divider"/>
            </div>
        )
    }
}