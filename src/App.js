import react from 'react'
import{ BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
