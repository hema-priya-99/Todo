import React from "react";

import './Chart.css';
import ChartBar from './ChartBar'

const Chart=(props)=>{

    const expenseAmounts=props.datapoints.map((datapoint)=>datapoint.value);
    const totalMax=Math.max(...expenseAmounts);

    return (
<div className="chart">
        {props.datapoints.map((datapoint)=>(
            <ChartBar 
            key={datapoint.label}
            label={datapoint.label}
            maxValue={totalMax}
            value={datapoint.value}
            />
        ))
        }
</div>
    )
        
}

export default Chart;