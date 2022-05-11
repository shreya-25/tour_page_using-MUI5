
import Home from './Pages/Home';
import Tour from './Pages/Tour';
import SearchAppBar from './components/AppBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <SearchAppBar></SearchAppBar>
    <Routes>
      <Route path="/" element ={< Home />}/>
      <Route path="/:id" element ={< Tour />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
