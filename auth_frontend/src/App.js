import './App.css';
import 'tachyons';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import { Component } from 'react';

const initialState = {
  input: '',
  route: 'SignIn',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    joined: ''
  }
}

class App extends Component {
  constructor()
  {
    super();

    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onRouteChange = (route) => {
    if(route === 'signout')
    {
      this.setState(initialState)
    }
    else if(route === 'home')
    {
      this.setState({isSignedIn: true })
    }

    this.setState({route: route});
  }

  render()
  {
    const {isSignedIn, route} = this.state;
  return (
    <div className="App">

      {/* <Particlebackground /> */}

      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>

      { route === 'home'

      ? <div>

        </div>

      : 
        (route === 'SignIn' 
        ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
      }
    </div>
  );
  }
}

export default App;
