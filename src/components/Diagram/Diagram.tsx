import React, {useEffect} from 'react'
import * as Highcharts from 'highcharts';
import Select from 'react-select'
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux'
import {AppState} from '../../store/configureStore'
import {DataRow} from '../../dataProcessing/data'
import darkUnica from "highcharts/themes/dark-unica";
import styles from './diagram.module.scss'
import './select.scss'


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
                color: 'rgba(132, 232, 180, .9)',
                data: [] as any
            },{
                name: '100 - 150',
                color: 'rgba(241,97,1, .9)',
                data: [] as any
            },{
                name: '150 and more',
                color: 'rgba(216,232,245, .7)',
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
        return `rgba(${[randomByte(), randomByte(), randomByte()].join(',')}, .8)`
    }
    getYearsOptions(){
        let yearsSet: any = new Set(this.props.products.map((p: DataRow) => p.year)) 
        const years = [... yearsSet]
        return years.map( (year: any) => ({
            value: year,
            label: year
        }))
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

        console.log(this.state.type)


        return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    {...this.props}
                />
                <div className={styles.controls}>
                    <Select
                        placeholder={this.state.type == 'individual' ? 'Individual products' : 'Products by categories'}
                        classNamePrefix="react-select"
                        className={styles.select}
                        value={this.state.type}
                        isSearchable={false}
                        onChange={(option) => this.setState({type: option.value})}
                        options={[
                            { value: 'individual', label: 'Individual products' },
                            { value: 'categories', label: 'Products by categories' }
                          ]}
                    />

                    <Select
                        classNamePrefix="react-select"
                        placeholder={this.state.year}
                        className={styles.select}
                        value={this.state.year}
                        isSearchable={false}
                        onChange={(option) => this.setState({year: option.value})}
                        options={this.getYearsOptions()}
                    />
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
