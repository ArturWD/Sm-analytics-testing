import React, {useEffect} from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux'
import {AppState} from '../../store/configureStore'
import {DataRow} from '../../dataProcessing/data'
import darkUnica from "highcharts/themes/dark-unica";
import { thisTypeAnnotation } from '@babel/types';
darkUnica(Highcharts);





class Diagram extends React.Component<any, any> {

    constructor(props : any){
        super(props)
        this.state = {
            year: 2016,
            type: 'categories'
        }
    }

    filterData(products: DataRow[]){
        if(this.state.type === 'individual'){
            return products
                .filter((product: DataRow) => product.year === this.state.year)
                .map( (product: DataRow) => ({
                    name: product.name,
                    color: this.getRandomColor(),
                    data: [[product.feature1, product.feature2]]
                }))
        }else{
            let byCategories = [{
                name: '0 - 100',
                color: 'rgba(132, 232, 180, .5)',
                data: [] as any
            },{
                name: '100 - 150',
                color: 'rgba(241,97,1, .5)',
                data: [] as any
            },{
                name: '150 and more',
                color: 'rgba(216,232,245, .5)',
                data: [] as any
            }]
            products
                .filter((product: DataRow) => product.year === this.state.year)
                .forEach((product: DataRow) => {
                    if(product.feature1 <= 100){
                        byCategories[0].data.push([product.feature1, product.feature2])
                    }else if (product.feature1 <= 150){
                        byCategories[1].data.push([product.feature1, product.feature2])
                    }else{
                        byCategories[2].data.push([product.feature1, product.feature2])
                    }
                })

            return byCategories;
        }
    }

    getRandomColor(){
        const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomByte = () => randomNumber(0, 255)
        return `rgba(${[randomByte(), randomByte(), randomByte()].join(',')}, .5)`
    }


    render(){
        const options: Highcharts.Options = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Goods'
            },
            xAxis: {
                title: {
                    //enabled: true,
                    text: 'Feature 1'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Feature 2'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 0,
                y: 0,
                floating: false,
                //backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            // marker: {
                            //     enabled: false
                            // } as any
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'Feature 1: {point.x}, Feature 2: {point.y}'
                    }
                }
            },
            series: this.filterData(this.props.products) as any
        }

        


        return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    {...this.props}
                />
                <div>
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        products: state.products
    }
  }

    
export default connect(mapStateToProps)(Diagram)
