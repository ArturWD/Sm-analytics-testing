import React from 'react'

//import logo from '../../images/disillusioned-dev-logo.svg'
import githubLogo from '../../images/github-logo.svg'

import footerStyles from './footer.module.scss'

const Footer: React.FC = () => {
    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.projectInfo}>
                <h4>You can find this project on</h4>
                <a className={footerStyles.projectInfo__githubLink} href="https://github.com/ArturWD/Sm-analytics-testing">
                    <img className={footerStyles.projectInfo__githubLogo} src={githubLogo} alt="github"></img>
                    GitHub
                </a>
            </div>
            <div className={footerStyles.credits}>
                <h3>Made by 
                    <a className={footerStyles.credits__me} href="https://github.com/ArturWD">Artur Shestakov</a>
                     using
                     <a href="https://www.highcharts.com/">Highcharts</a>
                </h3>
            </div>
        </footer>
    )
}
export default Footer