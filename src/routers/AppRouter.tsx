import React from 'react'
import { Route, Switch } from 'react-router-dom'



import AboutPage from '../components/AboutPage/AboutPage'
import DataPage from '../components/DataPage/DataPage'
import AnalyticsPage from '../components/AnalyticsPage/AnalyticsPage'

const AppRouter: React.FC = () => (
  
    <Switch>
      <Route path="/" component={AboutPage} exact={true} />
      <Route path="/data" component={DataPage} />
      <Route path="/analytics" component={AnalyticsPage} />
    </Switch>
);

export default AppRouter;
