import logo from './logo.svg';
import './header.css';

function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default  Header;

