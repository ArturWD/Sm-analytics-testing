import React from 'react'
import about from './about.module.scss'

import person from '../../images/person.svg'

const AboutPage: React.FC = () => {

    return(
        <section className={about.aboutSection}>
            <div className={about.helloBlock}>
                <h2 className={about.helloBlock__message}>Hello, Smart Analytics</h2>
                <div className={about.helloBlock__avatarContainer}>
                    <img className={about.helloBlock__avatar} src={person} alt="person"></img>
                </div>
                
            </div>
            <h1 className={about.aboutSection__email}>shestakovartur@gmail.com</h1>
        </section>
    )
}

export default AboutPage