import logo from './logo.svg';
import './App.css';
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo 
        user={comment.author}
        />     
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>
        {props.user.name}
        </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />
  );
}

const comment = {
  date: new Date(),
  text: 'React Guru',
  author: {
    name: 'Pussy',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function Sum(a, b){
return a + b
}

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      name: 'Derrick M'
    }
  }

  render(){
    return(
      <div>
        <div>
        <h1>What's up D</h1>
       <h2>{formatDate(this.state.date)}</h2> 
       <h3>{this.state.name}</h3>
        </div>   
      </div>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <body>
        <Welcome name='Derro' />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        {Sum(2,3)}
        <Clock />
        
      </body>
    </div>
  );
}

export default App;
