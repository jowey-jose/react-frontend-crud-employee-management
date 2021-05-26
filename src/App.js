// import logo from './logo.svg';

import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';

// Root Component.
// Uses jsx, similar to javascript, recommened for react app development. Makes react code simpler and neat.
function App() {
  return (
    // <div className="App">
    //   <header className="App-header"> 
    //     <img src={logo} className="App-logo" alt="logo"></img>
    //   </header>
    // </div>

    <div className="container">
      {/* Importing the component. The Component Contains a JSX Code to dispaly tables.*/}
      <ListEmployeeComponent />
    </div> 

  );
}

export default App;
