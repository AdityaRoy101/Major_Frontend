import React from 'react';
import { Component } from 'react';
class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        // var em = false;
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
        // var tt=false;
        // var y=0;
        // event.target.value.forEach(element => {
        //     if(element === '@')
        //         y++;
            
        //     if(element === ".")
        //         y++;
        // });

        // if(y === 2){
        //     tt=true;
        // }
        // if(tt === true){
        //     this.setState({email: event.target.value});
        // }else{
        //     alert("Invalid Email");
        // }

    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onSubmitSignIn = () => {
        const str = this.state.email;

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
            fetch('http://localhost:3000/register',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,  
                name: this.state.name
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id)
                {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
        }else{
            alert("Invalid Email format or Password format");
        }

    }
    render()
    {
        const { onRouteChange } = this.props
        return(
            <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="Name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="Name" 
                                name="Name"  
                                id="Name"
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">

                                {/* <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                
                                required={() =>{var em = true;}}
                                onChange={(em)=>this.onEmailChange}
                                />
                                 */}
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                required
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={ this.onSubmitSignIn } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={ () => onRouteChange('SignIn') } className="f5 link dim black db pointer">Sign In</p>
                        </div>
                    </div>
                </main>
            </article>
                
        )
    }
}

export default Register;