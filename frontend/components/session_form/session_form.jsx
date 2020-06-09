import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.update = this.update.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { login, signup, formType } = this.props;
        const user = this.state;
        if (formType == 'Login') {
            login(user);
        } else {
            signup(user);
        }
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.loginDemoUser();
    }

    rendersErrors() {
        return (
            <div className='session-errors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error ${i}`}>{error}</li>
                ))}
            </div>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { formType, close } = this.props;
        const { username, password } = this.state;

        return (
            <div className="session-form-container">
                <div className="close-session-form" onClick={e => close()}><i>X</i></div>
                <form className='session-form'>
                    <div className="session-form-inputs">
                        <div className="session-form-type">{formType}</div>
                        {this.rendersErrors()}
                        <input 
                            type='text'
                            placeholder='username'
                            value={username}
                            onChange={this.update('username')}
                        />
                        <input
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={this.update('password')}
                        />
                    </div>
                    <div className="session-form-buttons">
                        <button className='session-form-button login' onClick={this.handleSubmit}>
                            {formType}
                        </button>
                        <button className='session-form-button' onClick={this.handleDemo}>
                            Demo
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const msp = ({ errors }) => ({
    errors: Object.values(errors.session),
});

const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    loginDemoUser: () => dispatch(login({ username: "demo", password: 'password' })),
    clearErrors: () => dispatch(clearErrors())
});

SessionForm = withRouter(connect(msp, mdp)(SessionForm));

export default SessionForm;