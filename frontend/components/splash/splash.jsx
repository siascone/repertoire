import React from 'react';
import { resizeBackground } from '../../util/ui_util'
import SessionForm from '../session_form/session_form';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formType: ''
        }
        this.close = this.close.bind(this)
    }

    close(e) {
        this.setState({ formType: '' });
    }

    render(){
        const { formType } = this.state;
        return (
            <div className="splash-page-container">
                <div className="splash-intro">The collaboration platform for performing artists.</div>
                <img id="splash-background" src="/assets/splash-background.jpg" alt="" />
                {formType ? 
                <div className="session-form-modal-container">
                    <div 
                        className="session-form-modal-background"
                        onClick={e => this.close()}
                    ></div>
                    <SessionForm formType={formType} close={this.close} />
                </div>
                :
                <div className="session-links">
                    <div 
                        className="session-link login"
                        onClick={e => this.setState({ formType: 'Login' })}
                    >Login</div>
                    <div 
                        className="session-link"
                        onClick={e => this.setState({ formType: "Signup" })}
                    >Signup</div>
                </div>}
            </div>
        );
    }
}

setTimeout(() => resizeBackground(), 200)
window.addEventListener('resize', () => resizeBackground());

export default Splash;