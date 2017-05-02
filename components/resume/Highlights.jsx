import React from 'react'

export default class Highlights extends React.Component {
    render() {
        return (
            <ul>{
                this.props.highlights.map((highlight, i) => {
                    return <li key={i}>{highlight}</li>
                })
            }</ul>
        )
    }
}