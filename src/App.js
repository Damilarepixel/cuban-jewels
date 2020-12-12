import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNav from './components/MainNav'
import SubNav from './components/SubNav'
import Faq from './pages/Faq'
import Support from './pages/Support'
import About from './pages/About'




function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <SubNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/support" component={Support} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}




function Home() {
  return (
    <div>
      <h1>Hey, this is the home page</h1>
    </div>
  )
}



export default App;
