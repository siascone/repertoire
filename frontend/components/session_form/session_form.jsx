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
        return (e) => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { login, signup, formType } = this.props;

        const user = Object.assign({}, this.state);
        if (formType == 'Login') {
            login(user)
        } else {
            signup(user)
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
                    <li key={`error ${i}`}>{error}</li>
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
        
        let message;
        let wrapper;
        if (this.formType === 'Login') {
            message = <div>New to Repertoire?<Link to="/signup">Signup</Link></div>;
            wrapper = 'wrapper-signup';
        } else {
            message = <div>Already a Member?<Link to="/login">Login</Link></div>;
            wrapper = 'wrapper-login';
        }

        return (
            <div className={wrapper}>
                <form className='login-form'>
                    <div className='login-input-fields'>
                        <label className='username'>
                            <input 
                                type='text'
                                placeholder='username'
                                value={username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <label className='password'>
                            <input
                                type='password'
                                placeholder='password'
                                value={password}
                                onChange={this.update('password')}
                            />
                        </label>
                    </div>
                    <br />
                    <button className='login-submit' onClick={this.handleSubmit}>
                        {formType}
                    </button>
                    <button className='demo' onClick={this.handleDemo}>
                        Demo Login
                    </button>
                    <br />
                    <div className='message'>{message}</div>
                    {this.rendersErrors()}
                </form>
            </div>
        )
    }
}

const msp = ({ errors }) => {
    return {
        errors: Object.values(errors.session),
    };
};

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        loginDemoUser: () => dispatch(login({ username: "demo", password: 'password' })),
        clearErrors: () => dispatch(clearErrors())
    };
};

SessionForm = withRouter(connect(msp, mdp)(SessionForm));

export default SessionForm;