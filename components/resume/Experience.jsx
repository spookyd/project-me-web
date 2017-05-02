import React from 'react'
import TitleText from './TitleText.jsx';
import ExperienceDetail from './ExperienceDetail.jsx';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="">
                <TitleText title="Experience"/>
                {
                    this.props.work.map((experience, i) => {
                        return <ExperienceDetail key={i} experience={experience}/>;
                    })

                }
            </div>
        )
    }
}