import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      <div className="flex justify-end px-4 py-2">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
