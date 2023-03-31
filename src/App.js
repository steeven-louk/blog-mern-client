import './App.css';

import Homepage from './pages/Homepage';
import Navbar from './components/navbar/Navbar'
import PostDetail from './pages/PostDetail';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/write' exact element={<Write/>} />
        <Route path='/post/:postId' exact element={ <PostDetail/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={ <Register/>} />
      </Routes>
    </div>
  );
}

export default App;
