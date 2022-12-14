import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';
import GlobalStyle from './utils/style/GlobalStyle';
import { HousingProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <HousingProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/housing/:housingId">
            <Housing />
          </Route>
          <Route path="/housing/">
            <NotFoundPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </HousingProvider>
      <Footer />
    </Router>
  </React.StrictMode>
);
