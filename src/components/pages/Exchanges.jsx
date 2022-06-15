import React, { useEffect, useState } from "react";
import { Avatar, Col, Collapse, Row, Typography } from "antd";
import { useGetCryptoExchangesQuery } from "../../services/cryptoExchangesApi";
import axios from "axios";
import millify from "millify";
import { useGetCryptoDetailsQuery, useGetAllCryptosQuery } from "../../services/cryptoApi";
import HTMLReactParser from "html-react-parser";
const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const {data} = useGetCryptoDetailsQuery("WcwrkfNI4FUAe")
  const binanceData = data?.data?.coin
  // console.log(binanceData)
  const { data: exchanges, isFetching } = useGetCryptoExchangesQuery();
  // console.log({ exchanges });


 
  if (isFetching) return "Loading...";
  if (exchanges === undefined || !data) return <><h1>Loading...</h1></>
  return (
    <>
      {/* 
      1st I looked at the image and thought about how to copy it.
      2nd I went and looked at the ant design document on examples how to position
      the info I wanted to see in a row. hard coded the info first before its dynamic.
      3rd understood that I was going to map over some exchanges data and render it through
      a row that puts out exchange-stats. to make sure that is the layout i wanted
      I copy and pasted a couple to see what it would turn out. did some simliar css same as coin-stats
      added a hover effect cursor pointer and change the background. 
      4th Plan to create the endpoint and import that data here using the redux 
    */}
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      {/* map and go through exchange and render  */}
      <Row>
        {exchanges.map((exchange, i) => (
          <Col span={24}>
            <Collapse >
              <Panel
                showArrow={false}
                key={exchange.trust_score_rank}
                header={
                  <Row key={exchange.trust_score_rank}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>{" "}
                      </Text>
                      <Avatar className="exchange-image" src={exchange.image} />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>
                      ${millify(exchange.trade_volume_24h_btc)}
                    </Col>
                    <Col span={6}>
                    {console.log(binanceData)}
                      {millify(binanceData?.marketCap || 'undefined')}
                    </Col>
                    <Col span={6}>
                      {millify(binanceData.change || 'undefined')}
                    </Col>
                  </Row>
                }
              >
                {/*  */}
                <p style={{color: "orange"}}> Disclaimer: info currently displayed is for show and not accurate due to limitation of utilizing free tier coinranking api call</p>
                {HTMLReactParser(binanceData.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
