import React from 'react'

export default class Keywords extends React.Component {
    render() {
        return (
            <p>{
                this.props.keywords.reduce((keywords, keyword) => {
                    return keywords == '' ? keyword : keywords + ", " + keyword;
                }, '')
            }</p>
        )
    }
}