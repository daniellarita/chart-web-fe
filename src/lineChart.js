import React from 'react';
import { Chart } from "react-charts";

export const LineChart = () => {
    return (
        <div
            style={{
                width: "400px",
                height: "300px"
            }}
        >
            <h2>Dynamic Chart</h2>
            <Chart
                data={[
                    {
                    label: "BBT",
                    data: [[0, 95.59], [1, 96.23], [2, 97], [3, 98], [4, 95.7]]
                    },
                ]}
                axes={[
                    { primary: true, type: "linear", position: "bottom" },
                    { type: "linear", position: "left" }
                ]}
            />
        </div>
    )
};
