import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

var precision = 100;
var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                animation: {
                    onProgress: function(animation) {
                        ProgressEvent.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
                    }
                }
            },
            data: {
                labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00','08:00','09:00','10:00','11:00','12:00'],
                datasets: [
                    {
                        label: 'ElonCoin Price',
                        backgroundColor: 'rgba(79, 70, 229, 0.2)',
                        borderColor: 'rgba(79, 70, 229)',
                        data: [
                            randomnum,
                            2.80,
                            4.20,
                            0.69,
                            3.90,
                            randomnum,
                            2.90,
                            5.50,
                            5.55,
                            5.60,
                            4.80,
                            6.20,
                            randomnum
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} >
                <h3>ElonCoin Price</h3>
                <Line options={{ responsive: true }} data={this.state.data} />
            </div>
        )
    }
}