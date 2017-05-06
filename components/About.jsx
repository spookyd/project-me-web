import React from 'react';
import axios from 'axios';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: ""
        };
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8887/resume.json')
            .then(res => {
                    const about = res.data.basics.about
                    this.setState({about});
                }
            );
    }
    render() {
        return (
            <main>
                <p>{this.state.about}</p>
            </main>
        )
    }
}
