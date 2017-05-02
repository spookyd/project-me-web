import React from 'react'
import Router from 'react-router'
import Root from './components/Root.jsx'
import Index from './components/Index.jsx'
import About from './components/About.jsx'
import Resume from './components/resume/Resume.jsx'

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let Routes = (
    <Route handler={Root} path='/'>
        <DefaultRoute handler={Index}/>
        <Route path='/about/' handler={About}/>
        <Route path='/resume/' handler={Resume}/>
    </Route>
);

export default Routes
