import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import mainNav from './components/mainNav'
import Faq from './pages/Faq'
import Support from './pages/Support'
import About from './pages/About'




function App() {
  return (
    <Router>
      <div className="App">
        <mainNav />
        <Route path="/faq" component={Faq}/>
        <Route path="/support" component={Support}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
