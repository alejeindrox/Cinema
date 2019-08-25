import React from 'react';
import { Provider, } from 'react-redux';
import { PersistGate, } from 'redux-persist/integration/react';
import { store, persistor } from './stores/store';
import { Router, } from '@reach/router';
import Discover from './pages/discover';
import Search from './pages/search';
import Rate from './pages/rate';
// import Detail from './pages/detail';
import Layout from './components/layout/layout';
import MenuContainer from './components/menu/menuContainer';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuContainer />
        <Layout>
          <Router>
            <Discover path="/" />
            <Search path="search" />
            <Rate path="rate" />
            {/* <Detail path="detail/:id" /> */}
          </Router>
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
