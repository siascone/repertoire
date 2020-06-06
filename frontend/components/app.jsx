import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session_form/session_form';
import Header from '../components/header/header';
import Splash from './splash/splash';

const App = () => (

    <div className='main'>
        <div>
            <div className='header'>
                <div className='nav-links'>
                    <Link to='/' className='header-link'><i className='fa fa-home fa-lg'></i></Link>
                </div>
                <Header />
            </div>
            <Switch>
                <AuthRoute path='/login' component={SessionForm} />
                <AuthRoute path='/signup' component={SessionForm} />
                <Route exact path='/' component={Splash} />
                <Redirect to='/' />
            </Switch>
        </div>
    </div>
)

export default App;