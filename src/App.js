import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={info.user}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
   </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

const avatar = {
  user: {
    avatarUrl: 'http://placekitten.com/g/64/64',
    name: 'Only one Dero',
    
  } 
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

const info={
  user:{
    name:'Big man',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function Sum(a, b){
  return a + b
}

const values={
  a: 1,
  b: 2
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
       <h1>{Sum(values.a,values.b)}</h1>
        <div>
        <Welcome name='Sara' />
        <Welcome name='Mwema' />
        <Welcome name='Dero' />
        </div>

        <div>
          <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
           />
        </div>
        
        
      </body>
    </div>
  );
}

export default App;
