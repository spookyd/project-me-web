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
                    elements.push(<h6>{interest.name}</h6>);
                    elements.push(<Keywords keywords={interest.keywords}/>);
                    return {elements};
                })

                }
            </div>
        )
    }
}