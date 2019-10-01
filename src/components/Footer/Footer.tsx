import React from 'react'

//import logo from '../../images/disillusioned-dev-logo.svg'
//import githubLogo from '../../images/github-logo.svg'

import footerStyles from './footer.module.scss'

const Footer: React.FC = () => {
    return(
        <footer className={footerStyles.footer}>
            <h1>It is a footer</h1>
        </footer>
    )
}
export default Footer