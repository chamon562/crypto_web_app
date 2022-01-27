// later will need a chart to render time period so import useState
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { Col, Typography, Row, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import millify from "millify";

const { Title, Text } = Typography;
const { Option } = Select;

// to know what currency thats being looked at
// need to get coin id
const CryptoDetails = () => {
  // useParams takes the id in the url and simply allows to be used as a variable
  const { coinId } = useParams();
  // at the start of timePeriod set to 7 days
  const [timePeriod, setTimePeriod] = useState("7d");
  // make sure to pass coinId into useGetCryptoDetailsQuery(cointId)
  const volume = "24hVolume";
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  // setting the details to a constant variable to pull data for that specific coin
  const cryptoDetails = data?.data?.coin;
  // fetch crypto details for that specific crypto with its coinId which is uuid
  // do in cryptoApi in service

  if (isFetching) return "Loading...";
  // create an array of time
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "5y"];
  console.log(cryptoDetails);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {/* slug is alternative name for that crypto currency */}
          {cryptoDetails.name}({cryptoDetails.symbol}) Price
        </Title>
        <p>
          {cryptoDetails.name} Live price in US dollars. View value statistics,
          market cap and supply
        </p>
      </Col>
      {/* select drop down menu */}
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {/* inside Select drop down menu loop over options */}
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      {/* render a line chart */}
      {/* statistics */}
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} Value Statistics
            </Title>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              {/* {console.log(value)} */}
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        {/* along side bitcoin value stats want to show stats for all coins combined  */}
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Statistics
            </Title>
            <p>An overview showing the stats of all Crypto currencies </p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              {/* {console.log(value)} */}
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      {/* show all the data for that specific crypto currency */}
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails.name}
            {/* using HTMLReactParser, pass in cryptoDetails.description
                    description is a raw HTML:
                    description: "<p>Bitcoin is the firs
                  */}
            {HTMLReactParser(cryptoDetails.description)}
          </Title>
        </Row>
        {/* every coin has some related websites and links, render that data here*/}
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails.name} Links
          </Title>
          {/* under title loop over the cryptoDetails link*/}
          {cryptoDetails?.links.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name" >{link.type}</Title>
              <a href={link.url} target="_blank" rel="norefer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
