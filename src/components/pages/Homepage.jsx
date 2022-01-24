import React from "react";
// millify is package that will format our numbers
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
// import useGetCryptosQuery
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Cryptocurrencies, News } from "..";

const { Title } = Typography;
// need data for Statistics
const Homepage = () => {
  // calling useGetCryptosQuery
  // in an object get the data and redux gives isFetching state
  // call this as a hook by equal to useGetCryptosQuery()
  // hook to make api request
  // count turnary made in Cryptocurrenices.jsx and inside cryptoApi pass count as a paramter inside the
  // getCryptos query function, change createRequest(`/coins?limit=${count}`) endpoint to template string passing in count
  const { data, isFetching } = useGetCryptosQuery(10);
  // making use of data
  // use globalStats object to represent stats
  const globalStats = data?.data?.stats;
  console.log(globalStats)
  console.log(data)
  // how to fetch the data from data? at the start the data said undefined twice before a status of success
  // this why redux tool kit gives isFetching variable, so can check if(isFetching) is true then return a loading state
  if(isFetching){
    return 'Loading...'
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* span={12} will take up 12 spaces or half the width of the screen, */}
        {/* later to place info from api fetched */}
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more" ><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      {/* on Homepage only want to show first 10 crypto currencies & first 10 news
        passing in simplified props to Cryptocurrenceis and News component. the simplified
        variable will later help with changing the amount shown to just 10 rather than hundreds
      */}
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Latest Crypto News</Title>
        <Title level={3} className="show-more" ><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  );
};
export default Homepage;
