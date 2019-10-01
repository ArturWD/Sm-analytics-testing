import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppRouter from '../../routers/AppRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import appStyles from './app.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={appStyles.content}>
          <div className={appStyles.container}>
              <Header/>
          </div> 
          
          <main className={appStyles.main}>
              <div className={appStyles.container}>
                <AppRouter/>
              </div>
          </main>
          <div className={appStyles.footer}>
              <div className={appStyles.container}>
                  <Footer/>
              </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
