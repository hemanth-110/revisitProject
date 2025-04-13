import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import SideBar from './components/SideBar';

import './App.css';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import Categories from './Pages/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='app-container'>
          <div className='sidebar-container'><SideBar /></div>
          
          <div className='routes-container'>
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/orders" element={<Orders />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
