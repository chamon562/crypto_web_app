import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";
// TODO
// how to show the search bar in the Cryptocurrencies component
// and hid in the Homepage.jsx component
const Cryptocurrencies = ({ simplified }) => {
  // specifing a count variable
  // this is for if were in a simplified vew then show count 10 cards else 100
  // if the value is not set for simplified by default its set to true
  // then can pass count to useGetCryptosQuery
  // having the simplified property can filter it
  const count = simplified ? 10 : 100;

  // rename data to cryptoList to later get coins pulled out from it.
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // this state will give us access to the default state of coins
  // can turn this state into an empty array, because the useEffect that has the callbackfunction
  // with the constant filteredData is going to run at the start
  // const [cryptos, setCryptos] = useState(cryptosList?.data.coins);
  const [cryptos, setCryptos] = useState([]);
  console.log(cryptos);
  // when changing searchTerm can add a useEffect
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect is a combination of componentDidMount happening at the start
  // and also the componentDidUpdate with the 2 properties inside the dependancy array
  useEffect(() => {
    // filter out only the search term and called the toLowerCase method to convert users input to lower case.

    const filterdData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // cryptoList and searchTerm in dependancy array
    // this will run everytime these values change
    setCryptos(filterdData);
  }, [cryptosList, searchTerm]);
  // add if statement for isFetching to return a loading to give time for cryptocurrencies to load
  if (isFetching) return "Loading...";

  // loop over coins
  return (
    <>
      {/* input for users to search specific crypto */}
      {/* logic for showing the search only in the Cryptocurrency component and not in the Homepage.jsx */}
      {/* if no simplified then and only then render this , since simplified is true on the homepage,
          but if its not simplified then its not a homepage
        */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          //Col xs will be how wide this will be on screen
          // so total width will be 24 out of 24 because mobile devices are not wide
          // enough for more on the same row. sm={12} will be 2 per row lg={6}
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
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
