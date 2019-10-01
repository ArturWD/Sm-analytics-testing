import React from 'react'
import {NavLink} from 'react-router-dom'
//import ThemeSwither from '../ThemeSwitcher/ThemeSwitcher'

import logo from '../../images/disillusioned-dev-logo.svg'
import headerStyles from './header.module.scss'



const Header: React.FC = () => {

    return(
        <header className={headerStyles.header}>
            <NavLink to="/" className={headerStyles.header__logoLink}>
                <img className={headerStyles.header__logoImage} src={logo} alt="disillusioned dev logo"></img>
            </NavLink>
            
            <nav>
                <ul className={headerStyles.header__nav}>
                    <li><NavLink activeClassName={headerStyles.header__linkActive} className={headerStyles.header__link} to="/data">Data</NavLink></li>
                    <li><NavLink activeClassName={headerStyles.header__linkActive} className={headerStyles.header__link} to="/analytics">Analytics</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}
export default Header