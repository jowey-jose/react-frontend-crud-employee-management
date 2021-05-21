import logo from './logo.svg';
import './App.css';
import ListJobsComponent from './components/ListJobsComponent';

// Root Component.
// Uses jsx, similar to javascript, recommened for react app development. Makes react code simpler and neat.
function App() {
  return (
    <div className="container">

        {/* Importing the component. The Component Contains a JSX Code to dispaly tables.*/}
        <ListJobsComponent/>
        
    </div>
  );
}

export default App;
