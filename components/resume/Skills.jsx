import React from 'react'
import TitleText from './TitleText.jsx';
import Keywords from './Keywords.jsx';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="card">
                <TitleText title="Skills" />
                { this.props.skills.map((skill, i) => {
                    var elements = [];
                    elements.push(<h6>{skill.name}</h6>);
                    elements.push(<Keywords key={i} keywords={skill.keywords}/>);
                    return {elements};
                })

                }
            </div>
        )
    }
}