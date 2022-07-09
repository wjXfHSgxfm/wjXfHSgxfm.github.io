import './App.css';
import MessageList from './message-list';

function App() {
  const loggedIn = true;
  const error = true;

  return (
    <div className="App">


      <MessageList />
      {(loggedIn) ? 'Welcome back' : 'Nice to meet you'}
    {error && <div style={{color: 'red'}}>Name invalid</div>}
    </div>
  );
}

export default App;
