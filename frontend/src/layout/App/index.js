import React from 'react';
import './_app.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import Header from '../Header';
import ProfileScreen from '../../screens/ProfileScreen';


function App() {
  return (
    <Router>
      <Header />

      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/profile/:id' component={ProfileScreen} />
      </main>
    </Router>
  );
}

export default App;
