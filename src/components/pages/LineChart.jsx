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
  const coinTimeStamp = [];
  // looping over coinHistory?.data?.history?.length intill we get to the end of coinHistory
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    // now that am inside loop say coinPrice.push
    // console.log(coinHistory?.data?.history[i].price);
    // pushing and populating the one by one into coinPrice array
    coinPrice.push(coinHistory?.data?.history[i].price);
    console.log(coinPrice)
    // pushing and populating the one by one into timeStamp array
    // use new Date() to make more readible and covert to an actual date and use .toLocaleDateString()
    // to help with readiblity
    
    // issue 1: had to downgrade react-chartjs-2 to: npm i react-chartjs-2@3.0.4 to see the chart
    // issue 2: the graph kept showing year 1970  with the timestamp data given from the coinranking api and see that
    // in the coinranking api timestamp and it returns the infromation in a epoch timestamp in seconds.
    //  so I searched for how to convert it to an actual date in javascript and it said to
    // use new Date() constructor and pass in that epoch number inside the new Date() multiply that number by 1000
    // like so: new Date(epochNumber * 1000).
    // issue 3: graph shows and the date now shows correct current day. I wanted my graph to show in ascending order
    // because it started with most current date then went lowest. for example the graph started at todays date 1-28-22 then went down to
    // 1-27-22, from left to right. so what i did for it to reverse is take coinTimeStamp and use the .sort() method after the .push() method.
    // console.log(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    coinTimeStamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
    coinTimeStamp.sort();
    // now have both coinPrice and coinTimeStamp which can be used to base the chart off of
  }

  //   console.log(coinTimeStamp);
  // labels will be equal to the timeStamp array
  // and for each label need to have datasets
  // its going to be an array with 1 object inside
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#6da4c8",
      },
    ],
  };
  // inside option have scales key and that equals another object
  // get yAxes has an array that has an object inside with ticks that has an object
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          {/* trying to add ternary for style color in title if percentage is negative */}
          {/* article found to help https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6 
          What you provide to style attribute should be an object. Since we write js code in jsx between curly braces, you ll insert an object there
        */}
          <Title
            style={
              coinHistory?.data?.change < 0
                ? { color: "red" }
                : { color: "green" }
            }
            level={5}
            className="price-change"
          >
            {/* {console.log(coinHistory)} */}
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current: {coinName} Price: $ {currentPrice}
            {console.log(currentPrice)}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
      {/* dont forget to create options 
        try loop over coinHistory, get the prices and 
        get timestamps. can do by creating 2 empty arrays up top
      */}
    </>
  );
};

export default LineChart;
