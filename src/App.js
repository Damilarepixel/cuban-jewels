import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNav from './components/MainNav'
import SubNav from './components/SubNav'

//pages
import Faq from './pages/Faq'
import Support from './pages/Support'
import About from './pages/About'

//components
import HomeAlpha from './components/HomeAlpha'
import HomeBeta from './components/HomeBeta';
import HomeCharlie from './components/HomeCharlie';
import HomeDelta from './components/HomeDelta'
import HomeEcho from './components/HomeEcho'
import HomeFoxtrot from './components/HomeFoxtrot'
import HomeGecko from './components/HomeGecko'
import HomeHotel from './components/HomeHotel'
import HomeGallery from './components/HomeGallery'
import HomeFooter from './components/HomeFooter'




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
      <HomeAlpha />
      <HomeBeta />
      <HomeCharlie />
      <HomeDelta />
      <HomeEcho />
      <HomeFoxtrot />
      <HomeGecko />
      <HomeHotel />
      <HomeGallery />
    </div>
  )
}



export default App;
