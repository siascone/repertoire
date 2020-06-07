import React from 'react';
import { resizeBackground } from '../../util/ui_util'
import SessionForm from '../session_form/session_form';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formType: ''
        }
    }

    render(){
        const { formType } = this.state;
        return (
            <div className="splash-page-container">
                {formType ? 
                <div className="session-form-modal-container">
                    <div 
                        className="session-form-modal-background"
                        onClick={e => this.setState({ formType: '' })}
                    ></div>
                    <SessionForm formType={formType} />
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
                </div>
                }
                <img id="splash-background" src="/assets/splash-background.jpg" alt=""/>
            </div>
        );
    }
}

setTimeout(() => resizeBackground(), 100)
window.addEventListener('resize', () => resizeBackground());

export default Splash;