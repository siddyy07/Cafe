import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes/Routes'

import Layout from './components/Layout/Layout';
function App() {

  const renderApp = () => {
    return(
      <Routes/>
    )
  }
  return (
    <div className="App">
      {renderApp()}
      <Layout />
    </div>
  );
}

export default App;
