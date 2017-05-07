import React from 'react'
import TitleText from './TitleText.jsx';
import CertificationDetail from './CertificationDetail.jsx';

export default class Certifications extends React.Component {
    render() {
        return (
            <div className="card">
                <TitleText title="Certifications"/>
                {
                    this.props.certifications.map((cert, i) => {
                        return <CertificationDetail key={i} certification={cert}/>;
                    })

                }
            </div>
        )
    }
}