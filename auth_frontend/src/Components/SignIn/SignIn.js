import React from 'react';
import { Component } from 'react';
class SignIn extends Component
{
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {

        const str = this.state.signInEmail;

        var tt=false;
        var y=0;

        for(var i=0;i<str.length;i++){
            if(str[i] === '@')
                y++;
            
            if(str[i] === '.')
                y++;
        }

        if(y === 2){
            tt=true;
        }
        if(tt === true){

            fetch('http://localhost:3000/signin',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword  
                })
            })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
        })
        }else{
            alert("Register yourself or enter correct Email and Password");
        }

    }
    render(){
        const { onRouteChange } = this.props
        return(
            <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw5 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={ this.onSubmitSignIn } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib overall" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={ () => onRouteChange('Register') } className="f5 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>

        )
    }
}

export default SignIn;