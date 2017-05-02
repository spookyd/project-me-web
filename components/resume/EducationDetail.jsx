import React from 'react'
import TitleText from './TitleText.jsx';


export default class EducationDetail extends React.Component {
    render() {
        return (
            <div className="details">
                <p className="label">{this.props.institution.startDate} - {this.props.institution.endDate}</p>
                <h4>{this.props.institution.studyType}, {this.props.institution.area}</h4>
                <p className="link"><u>{this.props.institution.institution}</u>, <span>{this.props.institution.location}</span></p>
                <h4>GPA: {this.props.institution.gpa}</h4>
            </div>
        )
    }
}