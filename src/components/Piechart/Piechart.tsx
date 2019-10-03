import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
//import ThemeSwither from '../ThemeSwitcher/ThemeSwitcher'

import logo from '../../images/disillusioned-dev-logo.svg'
import headerStyles from './header.module.scss'



const Header: React.FC = () => {

    useEffect(() =>{
        var chart = Highcharts.chart('container', {

            chart: {
                type: 'column'
            },
        
            title: {
                text: 'Highcharts responsive chart'
            },
        
            subtitle: {
                text: 'Resize the frame or click buttons to change appearance'
            },
        
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
        
            xAxis: {
                categories: ['Apples', 'Oranges', 'Bananas'],
                labels: {
                    x: -10
                }
            },
        
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Amount'
                }
            },
        
            series: [{
                name: 'Christmas Eve',
                data: [1, 4, 3]
            }, {
                name: 'Christmas Day before dinner',
                data: [6, 4, 2]
            }, {
                name: 'Christmas Day after dinner',
                data: [8, 4, 3]
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    }, [])

    return(
        <div id="container"></div>
    )
}
export default Header