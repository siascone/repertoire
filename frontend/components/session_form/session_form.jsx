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
            <div className='errors'>
                {this.props.errors.map((error, i) => (
                    <div key={`error ${i}`}>{error}</div>
                ))}
            </div>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { formType } = this.props;
        const { username, password } = this.state;

        return (
            <div className="session-form-container">
                <form className='session-form'>
                <div className="form-type">{formType}</div>
                    <div className='login-input-fields'>
                        <div className='username label'></div>
                        <input 
                            type='text'
                            placeholder='username'
                            value={username}
                            onChange={this.update('username')}
                        />
                        <div className='password label'></div>
                        <input
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={this.update('password')}
                        />
                    </div>
                    <button className='login-submit' onClick={this.handleSubmit}>
                        {formType}
                    </button>
                    <button className='demo' onClick={this.handleDemo}>
                        Demo
                    </button>
                    <div className="session-errors">
                        {this.rendersErrors()}
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