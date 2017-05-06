import React from 'react'
import ContactText from './ContactText.jsx'

export default class Contact extends React.Component {
    render () {
        return (
            <div className="">
                {this.props.contactInfo.map((info, i) =>
                    <ContactText image={info.image} link={info.link} title={info.title} key={i} />
                )}
            </div>
        )
    }
}