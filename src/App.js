import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/company' exact element={<Company />}></Route>
        <Route path='/contact' exact element={<Contact />}></Route>
        <Route path='/newproject' exact element={<NewProject />}></Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
