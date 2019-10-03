import React from 'react'
import Diagram from '../Diagram/Diagram'
import styles from './analytics.module.scss'
const AnalyticsPage: React.FC = () => {

    return(
        <div>
            <h1 className={styles.header}>Analytics</h1>
            <Diagram/>
        </div>
    )
}

export default AnalyticsPage