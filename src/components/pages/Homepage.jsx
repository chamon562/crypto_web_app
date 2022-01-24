import React from "react";
// millify is package that will format our numbers
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
// import useGetCryptosQuery
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;
// need data for Statistics
const Homepage = () => {
  // calling useGetCryptosQuery
  // in an object get the data and redux gives isFetching state
  // call this as a hook by equal to useGetCryptosQuery()
  // hook to make api request
  const { data, isFetching } = useGetCryptosQuery();
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
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};
export default Homepage;
