import './App.css';
import CreateImgForm from './components/CreateImgForm/CreateImgForm';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
