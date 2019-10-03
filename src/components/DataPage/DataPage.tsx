import React from 'react'

import Table from '../Table/Table'

import dataStyles from './data.module.scss'
import Piechart from '../Piechart/Piechart'

const DataPage: React.FC = () => {
    return(
        <div className={dataStyles.dataSection}>
            <h2 className={dataStyles.dataSection__title}>Raw data overview</h2>
            <div className={dataStyles.dataSection__grid}>
                <div className={dataStyles.dataSection__gridColumn}>
                    <Table/>
                </div>
                <div className={dataStyles.dataSection__gridColumn}>
                    <Piechart/>
                </div>
            </div>
        </div>
    )
}

export default DataPage