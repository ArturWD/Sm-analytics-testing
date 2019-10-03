import React, {useEffect, Dispatch} from 'react';
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux'


import AppRouter from '../../routers/AppRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import {setProducts} from '../../store/actions/productsAction'
import data, {DataRow} from '../../dataProcessing/data'
import appStyles from './app.module.scss';




const App: React.SFC<any> = (props) => {

  useEffect(() => {
    props.dispatch(setProducts(data))
  }, [])

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

export default connect()(App);
