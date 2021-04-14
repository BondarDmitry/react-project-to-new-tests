import React from "react";
import Chart from "react-google-charts";

const test_data = [["From", "To", "Weight"],["UMONICA","UJAREDD ",2],["UDINESH","UJAREDD ",1],["UBERTRA","UJAREDD ",1],["URICHAR","UJAREDD ",1],["UERLICH","UJIANYA ",1],["URICHAR","UJIANYA ",1],["UDINESH","UJIANYA ",1],["UBERTRA","UJIANYA ",1],["UMONICA","UDINESH ",1],["UBERTRA","UDINESH ",1],["UERLICH","UBERTRA ",1],["UBERTRA","UMONICA ",1]]


const SankeyChart = () => {
    return (
        <div className="sankey-chart">
            <div style={{ marginBottom: "20px" }}>
                <h3 className="text-center">Sankey Chart Defoult</h3>
                <Chart
                    width={"100%"}
                    height={"500px"}
                    chartType="Sankey"
                    loader={<div>Loading Chart</div>}
                    // data={[
                    //     ["From", "To", "Weight"],
                    //     ["Daria Kobets", "Dmitry Bondar ", 5],
                    //     ["Daria Kobets", "Arjan Franzen ", 3],
                    //     ["Daria Kobets", "Valeriy Yakovenko ", 3],
                    //     ["Daria Kobets", "Daria Kobets ", 0],

                    //     ["Valeriy Yakovenko", "Dmitry Bondar ", 5],
                    //     ["Valeriy Yakovenko", "Daria Kobets ", 4],
                    //     ["Valeriy Yakovenko", "Arjan Franzen ", 3],
                    //     ["Valeriy Yakovenko", "Valeriy Yakovenko ", 0],

                    //     ["Arjan Franzen", "Dmitry Bondar ", 5],
                    //     ["Arjan Franzen", "Valeriy Yakovenko ", 4],
                    //     ["Arjan Franzen", "Daria Kobets ", 4],
                    //     ["Arjan Franzen", "Arjan Franzen ", 0],

                    //     ["Dmitry Bondar", "Valeriy Yakovenko ", 5],
                    //     ["Dmitry Bondar", "Daria Kobets ", 4],
                    //     ["Dmitry Bondar", "Arjan Franzen ", 3],
                    //     ["Dmitry Bondar", "Dmitry Bondar ", 0]
                    // ]}
                    data={test_data}
                    rootProps={{ "data-testid": "1" }}
                />
            </div>
            <div style={{ maringBottom: "20px" }}>
                <h3 className="text-center">Sankey Chart Changed Style</h3>
                <Chart
                    width={"100%"}
                    height={"500px"}
                    chartType="Sankey"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ["From", "To", "Weight"],
                        ["Daria Kobets", "Dmitry Bondar ", 5],
                        ["Daria Kobets", "Arjan Franzen ", 3],
                        ["Daria Kobets", "Valeriy Yakovenko ", 3],
                        ["Daria Kobets", "Daria Kobets ", 0],

                        ["Valeriy Yakovenko", "Dmitry Bondar ", 5],
                        ["Valeriy Yakovenko", "Daria Kobets ", 4],
                        ["Valeriy Yakovenko", "Arjan Franzen ", 3],
                        ["Valeriy Yakovenko", "Valeriy Yakovenko ", 0],

                        ["Arjan Franzen", "Dmitry Bondar ", 5],
                        ["Arjan Franzen", "Valeriy Yakovenko ", 4],
                        ["Arjan Franzen", "Daria Kobets ", 4],
                        ["Arjan Franzen", "Arjan Franzen ", 0],

                        ["Dmitry Bondar", "Valeriy Yakovenko ", 5],
                        ["Dmitry Bondar", "Daria Kobets ", 4],
                        ["Dmitry Bondar", "Arjan Franzen ", 3],
                        ["Dmitry Bondar", "Dmitry Bondar ", 0]
                    ]}
                    rootProps={{ "data-testid": "2" }}
                />
            </div>
        </div>
    );
};

export default SankeyChart;
