import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;
// how is line chart going to look?

// how to prepare data for it?
// in CryptoDetails.jsx have the info there and import this file and pass the data as a props
// to later be used in this file to utilize react-chartjs
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimeStamp = []
    // looping over coinHistory?.data?.history?.length intill we get to the end of coinHistory
    for(let i = 0; i < coinHistory?.data?.history?.length ; i++){
        // now that am inside loop say coinPrice.push
        console.log(coinHistory.data.history[i].price)
        // pushing and populating the one by one into coinPrice array 
        coinPrice.push(coinHistory.data.history[i].price)
        // pushing and populating the one by one into timeStamp array 
        // use new Date() to make more readible and covert to an actual date and use .toLocaleDateString()
        // to help with readiblity 
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
        // now have both coinPrice and coinTimeStamp which can be used to base the chart off of
    }
    return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}Price Chart
          <Col className="price-container">
            <Title level={5} className="price-change">
                {/* {console.log(coinHistory)} */}
              Change {coinHistory?.data?.change ? coinHistory?.data?.change + "%" : "undefined" }
            </Title>
            <Title level={5} className="current-price">
              Current {coinName} Price: $ {currentPrice}
            </Title>
          </Col>
        </Title>
      </Row>
      {/* dont forget to create options 
        try loop over coinHistory, get the prices and 
        get timestamps. can do by creating 2 empty arrays up top
      */}
      <Line data={data} options={options}/>
    </>
  );
};

export default LineChart;
