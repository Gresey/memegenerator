import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/home';
import EditPage from './pages/edit';
function App() {
  return (
    <div className="App">
      <h1 style={{color:'white'}}>Meme Generator</h1>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/edit/" element={<EditPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
