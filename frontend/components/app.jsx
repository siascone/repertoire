import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_from_container';
import HeaderContainer from '../components/header/header_container';
import Splash from './splash/splash';
// import Footer from './footer/footer';


const App = () => (

    <div className='main'>
        <div>
            <div className='header'>
                <div className='nav-links'>
                    <Link to='/' className='haeader-link'><i className='fa fa-home fa-lg'></i></Link>
                </div>
                <HeaderContainer />
            </div>
            <Switch>
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <Route exact path='/' component={Splash} />
                <Redirect to='/' />
            </Switch>
        </div>
    </div>
)

export default App;