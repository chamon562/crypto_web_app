import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({simplified}) => {
  // specifing a count variable
  // this is for if were in a simplified vew then show count 10 cards else 100
  // if the value is not set for simplified by default its set to true
  // then can pass count to useGetCryptosQuery
  const count = simplified ? 10: 100;

  // rename data to cryptoList to later get coins pulled out from it.
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // this state will give us access to the default state of coins

  const [cryptos, setCryptos] = useState(cryptosList?.data.coins);
  console.log(cryptos);
  // add if statement for isFetching to return a loading to give time for cryptocurrencies to load
  if(isFetching) return 'Loading...'


  // loop over coins
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          //Col xs will be how wide this will be on screen
          // so total width will be 24 out of 24 because mobile devices are not wide
          // enough for more on the same row. sm={12} will be 2 per row lg={6}
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
