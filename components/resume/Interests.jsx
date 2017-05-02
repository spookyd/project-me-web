import React from 'react'
import TitleText from './TitleText.jsx';
import Keywords from './Keywords.jsx';

export default class Interests extends React.Component {
    render() {
        return (
            <div className="">
                <TitleText title="Interests"/>
                { this.props.interests.map((interest) => {
                    var elements = [];
                    elements.push(<h4>{interest.name}</h4>);
                    elements.push(<Keywords keywords={interest.keywords}/>);
                    return {elements};
                })

                }
            </div>
        )
    }
}