//Style Imports
import './style/App.css'

//Component Imports
import Nav from './components/Nav'

//Page Components Imports
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

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
          <Route
            path="/resume"
            element={<Resume/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
