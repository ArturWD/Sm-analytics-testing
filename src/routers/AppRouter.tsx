import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutPage from '../components/AboutPage/AboutPage'
import DataPage from '../components/DataPage/DataPage'
import AnalyticsPage from '../components/AnalyticsPage/AnalyticsPage'

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AboutPage} exact={true} />
        <Route path="/data" component={DataPage} />
        <Route path="/analytics" component={AnalyticsPage} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
