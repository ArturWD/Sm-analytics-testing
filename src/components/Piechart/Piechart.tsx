import React, {useEffect} from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux'
import {AppState} from '../../store/configureStore'
import {DataRow} from '../../dataProcessing/data'
import darkUnica from "highcharts/themes/dark-unica";
darkUnica(Highcharts);


interface Data{
    name: string,
    y: number
}



class Piechart extends React.Component<any, any> {
    render(){
        const options: Highcharts.Options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            } as any,
            title: {
                text: 'Products amount by years'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Years',
                colorByPoint: true,
                data: this.props.products.reduce( (data: any, curr: DataRow) => {
                    const index = data.findIndex((val: any) => val.name == curr.year)
                    console.log(index)
                    if(index !== -1){
                        data[index].y = data[index].y+1
                        return data
                    
                    }else{
                        return [...data, {name: curr.year, y: 1}]
                    }
                }, [])
            }] as any
        }

        const datat = this.props.products.reduce( (data: any, curr: DataRow) => {
            const index = data.findIndex((val: any) => val.name == curr.year)
            console.log(index)
            if(index !== -1){
                data[index].y = data[index].y+1
                return data
            
            }else{
                return [...data, {name: curr.year, y: 1}]
            }
        }, [])
        console.log(datat)


        return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    {...this.props}
                />
            </div>
        )
    }
}
// const Piechart = (props: HighchartsReact.Props) => <div>
//     <HighchartsReact
//         highcharts={Highcharts}
//         options={options}
//         {...props}
//     />
// </div>

function mapStateToProps(state: any) {
    return {
        products: state.products
    }
  }

    
export default connect(mapStateToProps)(Piechart)
