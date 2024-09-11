import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import User from './pages/User';
import Checker from './pages/Checker';
import Me from './pages/Me';
import NotFound from './pages/NotFound';
import Guidelines from './pages/Guidelines';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="Hacktoberfest Checker" />
    <PageWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/me" element={<Me />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="*" element={<NotFound />} /> {/* Updated to catch-all route */}
        </Routes>
      </Router>
    </PageWrapper>
  </Fragment>
);

export default App;
