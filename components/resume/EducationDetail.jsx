import React from 'react'
import TitleText from './TitleText.jsx';


export default class EducationDetail extends React.Component {
    render() {
        return (
            <div className="details">
                <p className="caption">{this.props.institution.startDate} - {this.props.institution.endDate}</p>
                <h6>{this.props.institution.studyType}, {this.props.institution.area}</h6>
                <p className="link"><u>{this.props.institution.institution}</u>, <span>{this.props.institution.location}</span></p>
                <p className="menu">GPA: {this.props.institution.gpa}</p>
            </div>
        )
    }
}