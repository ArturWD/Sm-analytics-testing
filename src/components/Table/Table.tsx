import React from 'react'

import TableRow from '../TableRow/TableRow'
import tableStyles from './table.module.scss'

import data, {DataRow} from '../../dataProcessing/data'


// interface TableProps{
//     products: DataRow[]
// }

const Table: React.FC = () => {

    const products: DataRow[] = data

    return(
        <div className={tableStyles.table}>
                <div className={tableStyles.thead}>
                    <div className={tableStyles.tr}>
                        <div className={`${tableStyles.col} ${tableStyles.colNum}`}><span className={tableStyles.colName}>№</span></div>
                        <div className={tableStyles.col}><span className={tableStyles.colName}>Name</span></div>
                        <div className={tableStyles.col}><span className={tableStyles.colName}>Feature1</span></div>
                        <div className={tableStyles.col}><span className={tableStyles.colName}>Feature2</span></div>
                        <div className={tableStyles.col}><span className={tableStyles.colName}>Year</span></div>
                    </div>
                </div>
    
                <div className={tableStyles.tbody}>
                    {products.length === 0 ? <div className={tableStyles.notFound}>No data found</div>
                    : products.map((product: DataRow, index: number) => <TableRow key={index} index={index} {...product}/>)}       
                </div>
            </div>
    )
}

export default Table