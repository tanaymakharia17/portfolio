import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import { Route, Routes } from 'react-router-dom';
import Error from './Error';
import Skills from './Skills';
import Experience from './Experience';
import { information } from './constants/constants';

function App() {
  return (
    <div className="App">
      <div id="App__upper-section">
        <div id="App__left-section">
          <Header  {...information} />
        </div>
        <div id="App__right-section">
        <Routes>
          <Route exa path="/" element={<About {...information} />} />
          <Route path="/projects" element={<Projects {...information} />} />
          <Route path="/skills" element={<Skills {...information} />} />
          <Route path="/experience" element={<Experience {...information} />} />
          <Route path="*" element={<Error {...information} />} />
        </Routes>
        </div>
      </div>
      <div id="App__lower-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
