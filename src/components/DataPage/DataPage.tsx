import React from 'react'

import Table from '../Table/Table'

import dataStyles from './data.module.scss'


const DataPage: React.FC = () => {
    return(
        <div className={dataStyles.dataSection}>
            <h2 className={dataStyles.dataSection__title}>Raw data overview</h2>
            <div className={dataStyles.dataSection__grid}>
                <div className={dataStyles.dataSection__gridColumn}>
                    <Table/>
                </div>
                <div className={dataStyles.dataSection__gridColumn}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Tempora eligendi odit veritatis molestias, eveniet dolorum ex i
                    llum aliquam ut placeat sequi iusto voluptate nobis quos magni qui, quo veniam magnam!
                </div>
            </div>
        </div>
    )
}

export default DataPage