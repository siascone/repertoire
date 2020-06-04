import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(type) {
        return (e) => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
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
        this.props.clearErrors()
    }

    render() {
        let message;
        let wrapper;
        if (this.props.formType === 'Login') {
        message = <div>New to Repertoire? {this.props.link}</div>
            wrapper = 'wrapper-login'
        } else {
        message = <div>Already a Reper {this.props.link}</div>
            wrapper = 'wrapper-signup'
        }

        return (
            <div className={wrapper}>
                <form className='login-form'>
                    <div className='login-input-fields'>
                        <label className='username'>
                            <input 
                                type='text'
                                placeholder='username'
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <label className='password'>
                            <input
                                type='password'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                    </div>
                    <br />
                    <button className='login-submit' onClick={this.handleSubmit}>
                        {this.props.formType}
                    </button>
                    <button className='demo' onClick={this.props.loginDemoUser}>
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

export default SessionForm;