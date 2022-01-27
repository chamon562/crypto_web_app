import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;
// how is line chart going to look?

// how to prepare data for it?
// in CryptoDetails.jsx have the info there and import this file and pass the data as a props
// to later be used in this file to utilize react-chartjs
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}Price Chart
          <Col className="price-container">
            <Title level={5} className="price-change">
                {console.log(coinHistory)}
              Change {coinHistory?.data?.change ? coinHistory?.data?.change + "%" : "undefined" }
            </Title>
            <Title level={5} className="current-price">
              Current {coinName} Price: $ {currentPrice}
            </Title>
          </Col>
        </Title>
      </Row>
    </>
  );
};

export default LineChart;
