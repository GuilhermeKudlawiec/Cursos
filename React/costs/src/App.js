import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

/*======*/

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

/*======*/

import Container from './components/layout/Container';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </div>
        <Container>
          <Routes>
            <Route path="/company" element={ <Company /> } ></Route>
            <Route path="/contact" element={ <Contact /> } ></Route>
            <Route exact path="/" element={ <Home /> } ></Route>
            <Route path="/newproject" element={ <NewProject /> } ></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
