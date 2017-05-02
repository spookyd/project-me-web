import React from "react";

/*
 {
 "title": "OCPJP (Oracle Certified Professional Java Programmer)",
 "date": "2013-07-19",
 "awarder": "Oracle",
 "summary": "An Oracle Certified Professional, Java SE 6 Programmer has experience using the Java programming language, understands the basic syntax and structure of the Java programming language and can create Java technology applications that run on server and desktop systems using J2SE 6.0."
 }
 */
export default class EducationDetail extends React.Component {
    render() {
        return (
            <div className="details">
                <p className="label">{this.props.certification.date}</p>
                <h4>{this.props.certification.title}</h4>
                <p className="link"><u>{this.props.certification.awarder}</u></p>
            </div>
        )
    }
}