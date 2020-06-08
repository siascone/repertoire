import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session_form/session_form';
import Header from '../components/header/header';
import Splash from './splash/splash';
import Menu from './menu/menu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
    }

    render() {
        const { menu } = this.state;
        return(
            <div className="main">
                <Header menu={menu} toggleMenu={this.toggleMenu} />
                {menu ? <Menu toggleMenu={this.toggleMenu} /> : null}
                <Switch>
                    {/* <AuthRoute path='/login' component={SessionForm} /> */}
                    {/* <AuthRoute path='/signup' component={SessionForm} /> */}
                    <AuthRoute exact path='/' component={Splash} />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

export default App;