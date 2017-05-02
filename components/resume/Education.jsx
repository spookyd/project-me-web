import React from 'react'
import TitleText from './TitleText.jsx';
import EducationDetail from './EducationDetail.jsx';

export default class Education extends React.Component {
    render() {
        return (
            <div className="">
                <TitleText title="Education"/>
                {
                    this.props.education.map((institution, i) => {
                        return <EducationDetail key={i} institution={institution}/>;
                    })

                }
            </div>
        )
    }
}