import React from "react";
import Highlights from "./Highlights.jsx";


export default class ExperienceDetail extends React.Component {
    render() {
        return (
            <div className="details">
                <p className="label">{this.props.experience.startDate} - {this.props.experience.endDate}</p>
                <h4>{this.props.experience.position}</h4>
                <p className="link"><u>{this.props.experience.company}</u>, <span>{this.props.experience.location}</span></p>
                <p>{this.props.experience.summary}</p>
                <Highlights highlights={this.props.experience.highlights} />
            </div>
        )
    }
}