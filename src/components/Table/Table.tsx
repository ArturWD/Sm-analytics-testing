import React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import TableRow from '../TableRow/TableRow'
import tableStyles from './table.module.scss'
import {AppState} from '../../store/configureStore'
import {DataRow} from '../../dataProcessing/data'



  
interface StateProps {
    products: DataRow[]
}


type Props = StateProps 

interface State {
    
}


class Table extends React.Component<Props, State>{

    constructor(props: Props){
        super(props)
    }
    render(){
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
                    {this.props.products.length === 0 ? <div className={tableStyles.notFound}>No data found</div>
                    : this.props.products.map((product: DataRow, index: number) => <TableRow key={index} index={index} {...product}/>)}       
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: AppState) {
    return {
        products: state.products
    }
  }

    
export default connect
    (mapStateToProps)(Table)


