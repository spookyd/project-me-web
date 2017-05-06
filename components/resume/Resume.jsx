import React from "react";
import Summary from "./Summary.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Certification from "./Certifications.jsx";
import Interests from "./Interests.jsx";
import Experience from "./Experience.jsx";
import axios from "axios";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            label: "",
            contactInfo: [],
            skills: [],
            work: [],
            education: [],
            certifications: [],
            interests: []
        }

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8887/resume.json')
            .then(res => {
                var assetsBaseURL = 'http://127.0.0.1:8887/assets/';
                const basics = res.data.basics;
                const name = basics.name;
                const label = basics.label;
                const image = assetsBaseURL + basics.picture;
                var contactInfo = [];
                // Location details
                contactInfo.push({
                    image: assetsBaseURL + basics.location.icon,
                    title: basics.location.city + ", " + basics.location.region

                });
                // Mail details
                contactInfo.push({
                    image: assetsBaseURL + basics.emailIcon,
                    link: "mailto:" + basics.email,
                    title: basics.email

                });
                // Phone details
                contactInfo.push({
                    image: assetsBaseURL + basics.phoneIcon,
                    link: "tel:" + basics.phone,
                    title: basics.phone

                });
                const profiles = basics.profiles.map((profile) => {
                    return {
                        image: assetsBaseURL + profile.icon,
                        link: profile.url,
                        title: profile.network
                    }
                });
                profiles.forEach((profile) => {
                    contactInfo.push(profile);
                });
                const skills = res.data.skills;
                const education = res.data.education;
                const work = res.data.work;
                const certifications = res.data.certifications;
                const interests= res.data.interests;
                this.setState({name, label, image, contactInfo, skills, work, education, certifications, interests});
            });
    }

    render() {
        return (
            <main className="row">
                <section id="main-content" className="col-4">
                    <Summary name={this.state.name} image={this.state.image} label={this.state.label}/>
                    <Contact contactInfo={ this.state.contactInfo }/>
                    <Skills skills={this.state.skills}/>
                    <Education education={this.state.education}/>
                    <Certification certifications={this.state.certifications}/>
                    <Interests interests={this.state.interests}/>
                </section>
                <section classID="experience-content" className="col-8">
                    <Experience work={this.state.work}/>
                </section>
            </main>
        )
    }
}