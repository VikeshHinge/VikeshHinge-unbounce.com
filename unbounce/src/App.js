
import './App.css';
import Navbar from './component/nav';
import Routepage from './component/AllRouts';
import Homepg from './component/Home';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routepage/>
      <Homepg/>
    </div>
  );
}

export default App;
