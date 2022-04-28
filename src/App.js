//Style Imports
import './style/App.css'

//Component Imports
import Nav from './components/Nav'

//Page Components Imports
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//Extras Import
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/projects"
            element={<Projects/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
