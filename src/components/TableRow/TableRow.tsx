
import React from 'react';
import {DataRow} from '../../dataProcessing/data'
import rowStyles from './tableRow.module.scss'
type TableRow = {
    index: number,
    name: string,
    feature1: number,
    feature2: number,
    year: number
}

const TableRow :React.FC<TableRow> = ({index, name, feature1, feature2, year}) => (
    <div className={rowStyles.tr}>
        <div className={`${rowStyles.td} ${rowStyles.colNum}`}>{index+1}</div>
        <div className={rowStyles.td}>{name}</div>
        <div className={rowStyles.td}>{feature1}</div>
        <div className={rowStyles.td}>{feature2}</div>
        <div className={rowStyles.td}>{year}</div>
    </div>
);

export default TableRow;