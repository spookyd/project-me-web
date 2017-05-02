import React from 'react'
import Summary from './Summary.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Certification from './Certifications.jsx';
import Interests from './Interests.jsx';
import Experience from './Experience.jsx';

export default class Resume extends React.Component {
    render() {
        return (
            <main className="row">
                <section id="main-content" className="col-4">
                    <Summary name="Luke Davis" image={'./../../img/luke_davis.JPG'} label="Software Developer"/>
                    <Contact contactInfo={ [] }/>
                    <Skills skills={[
                        {
                            name: "iOS Development",
                            level: "Master",
                            keywords: [
                                "Swift 3",
                                "Objective C",
                                "XCTest",
                                "Carthage",
                                "Alamofire"
                            ]
                        }
                    ]}/>
                    <Education education={[
                        {
                            institution: "DeVry University",
                            area: "Computer Engineering Technologies",
                            studyType: "Bachelor of Science",
                            startDate: "2007-06",
                            endDate: "2011-07",
                            location: "Columbus, OH",
                            gpa: "3.96"
                        }
                    ]}/>
                    <Certification certifications={
                        [
                            {
                                "title": "OCPJP (Oracle Certified Professional Java Programmer)",
                                "date": "2013-07-19",
                                "awarder": "Oracle",
                                "summary": "An Oracle Certified Professional, Java SE 6 Programmer has experience using the Java programming language, understands the basic syntax and structure of the Java programming language and can create Java technology applications that run on server and desktop systems using J2SE 6.0."
                            }
                        ]
                    }/>
                    <Interests interests={
                        [
                            {
                                "name": "IoT",
                                "keywords": [
                                    "Bluetooth 4+",
                                    "Raspberry Pi",
                                    "Node Red",
                                    "Arduino"
                                ]
                            }
                        ]
                    }/>
                </section>
                <section classID="experience-content" className="col-8">
                    <Experience work={
                        [
                            {
                                "company": "The Wendy’s Company",
                                "position": "Lead Mobile Application Architect, eCommerce",
                                "location": "Columbus, OH",
                                "website": "http://wendys.com",
                                "startDate": "2015-06",
                                "endDate": "present",
                                "summary": "One of the lead engineers on the Wendy's eCommerce Application Development team with primary focus on the iOS and Android platforms. Provide technical guidance on best development and Scrum practices across the eCommerce Application Department.",
                                "highlights": [
                                    "Led iOS application refactor of the current Wendy's application involving converting code base from a singular Objective C code base to Swift modules",
                                    "Guided Junior and Core members in TDD practices; resulting in a code coverage increase from 6% to 75%",
                                    "Currently partnering with stakeholders and development team to align requirements on the new Wendy's Loyalty Program",
                                    "Work directly with UX team to ensure a unified and polished product"
                                ]
                            }, {
                            "company": "The Wendy’s Company",
                            "position": "Senior Application Developer, eCommerce",
                            "location": "Columbus, OH",
                            "website": "http://wendys.com",
                            "startDate": "2014-11",
                            "endDate": "2015-06",
                            "summary": "Joined Wendy's to assist in forming and leading a new eCommerce development team as part of the new Wendy's innovation space, 90º Labs. Worked with the department Director and other lead engineers to establish the foundation of the new department",
                            "highlights": [
                                "Developed a Kiosk POC, which has led to the self-ordering kiosks that are deployed today",
                                "Leveraged Bluetooth Beacons and Geofencing techniques to provide a unique ordering experience for iOS and Android users",
                                "Focused effort on prototyping many of the features now implemented in the Wendy's mobile applications",
                                "Instrumental in the development of the products foundation, CI, and Automation Scripts to support the new iOS, Android, and Web applications; https://itunes.apple.com/us/app/wendys/id540518599?mt=8, https://play.google.com/store/apps/details?id=com.wendys.nutritiontool&hl=en"
                            ]
                        }, {
                            "company": "Lucky 13 Technologies, LLC.",
                            "position": "Owner, Lead Developer",
                            "location": "Columbus, OH",
                            "website": "http://lucky13.technology",
                            "startDate": "2014-10",
                            "endDate": "present",
                            "summary": "Partner with software firms to build custom mobile applications and backend services for customers such as Scotts® and Bold Penguin.",
                            "highlights": [
                                "Helped develop a custom Android based door to door sales app which allowed for card present credit card transactions",
                                "Provided support for existing PHP application used for sales rep management",
                                "Created an API only Rails 5 application used for an insurance eligibility rules engine"
                            ]
                        }, {
                            "company": "Leading EDJE, LLC.",
                            "position": "Solutions Developer",
                            "location": "Columbus, OH",
                            "website": "http://leadingedje.com/",
                            "startDate": "2013-02",
                            "endDate": "2014-11",
                            "summary": "Member of a solutions delivery team, which provided expertise in custom applications development and business solutions utilizing leading edge technologies.",
                            "highlights": [
                                "Developed new features on a client/admin portal project utilizing Java backend and frontend technologies",
                                "Built a, native Android, forklift management application; also, exposed HTTP endpoints using Java technologies, http://www.crown.com/en-us/fleet-management/infolink.html",
                                "Created a warehouse fulfillment solution proof of concepts leveraging Google Glass and Bluetooth 4.0",
                                "Performed a security audit, based on OWASP for mobile guidelines, for DSW’s eCommerce iOS application"
                            ]
                        }, {
                            "company": "Motorists Insurance Group",
                            "position": "Developer",
                            "location": "Columbus, OH",
                            "website": "https://www.motoristsinsurancegroup.com/who-we-are/affiliates/motorists-mutual",
                            "startDate": "2013-02",
                            "endDate": "2011-06",
                            "summary": "Supported and developed new features for an existing home and life insurance agent portals. Mentored in Android and iOS development, testing, and deployment.",
                            "highlights": [
                                "Provided support for Home Lines Agent Portal application utilizing Java technologies",
                                "Migrated the internal Life Insurance Workflow system from VB to C# along with creating a unit test suite",
                                "Mentored in Android and iOS development, testing, and deployment for the Motorists Insurance and Iowa Insurance mobile applications; https://itunes.apple.com/us/app/motorists-mutual-mobile/id503935355?mt=8, https://play.google.com/store/apps/details?id=com.motorists&hl=en"
                            ]
                        }, {
                            "company": "DesignLinx, LLC.",
                            "position": "Partner, Application Developer",
                            "location": "Newark, OH",
                            "website": "",
                            "startDate": "2012",
                            "endDate": "2013",
                            "summary": "Designed and created an interactive wedding planning website, Wedding Linx, which connected DIY wedding planners with vendors able to assist them.",
                            "highlights": [
                                "Leveraged ASP.NET 3.5 to create a wedding planning platform with in app messaging, rating, and vendor bidding systems",
                                "Designed application data model and implemented on SQL Server database, including tables, stored procedures, and triggers",
                                "Developed a module integrated with authorize.net to add payment functionality to the site"
                            ]
                        }, {
                            "company": "Goodin Electric",
                            "position": "Electrical Journeyman, Foreman",
                            "location": "Newark, OH",
                            "website": "http://www.goodinelectric.com/",
                            "startDate": "2000",
                            "endDate": "2012",
                            "summary": "Lead foreman on over 20 different projects, both commercial and industrial environments, with varying team sizes, ranging from 2 to 12 people.",
                            "highlights": [
                                "Installation of a diverse set of electrical systems",
                                "Collaborated on design and installation of multiple types of motor control applications",
                                "Worked on, and built, industrial automation machinery utilizing both low and high voltage electrical systems"
                            ]
                        }
                        ]
                    }/>
                </section>
            </main>
        )
    }
}