import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import WorkWithUs from './pages/WorkWithUs'
import ArticlePage from './pages/ArticlePage'
import ArticlesList from './pages/ArticlesListPage'
import NotFoundPage from './pages/NotFound404Page'
import PaymentPage from './pages/PaymentPage'
import InstantSupportPage from './pages/InstantSupportPage'
import whatsappImage from './assets/images/whatsapp1.png'
import ImportantLinks from './components/ImportantLinks'
import Onlinetraining from './pages/OnlineTrainingPage'
import OnlineTrainingLinksPage from './pages/OnlineTrainingLinksPage'
/*
function App() {
  return (
    // <div className="App">
    <div className="App"> 
    <h1>welcome to my blog</h1>
    <HomePage />
    </div >
  );
}
*/

class App extends React.Component {
 

  render() {
    return (
      <>
      
      <Router>
     <header>
         <img src={whatsappImage} alt="Whatsapp" /> &nbsp; <b>Contact : +91 8218797122</b>
       </header>
        <div>
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/WorkWithUs" component={WorkWithUs} />
              <Route path="/Payment" component={PaymentPage} />
              <Route path="/instant-support" component={InstantSupportPage} />
              <Route path="/articles-list" component={ArticlesList} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/online-training" component={OnlineTrainingLinksPage} exact/>
              <Route path="/online-training/:name" component={Onlinetraining} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <div>
        <br></br>
        <footer>
        < ImportantLinks />
          <div>Copyrights: QA JOB SUPPORT (2020) reserved</div>
          </footer>
          </div>
      </Router >
      
      </>
    )
  }
}

export default App;
