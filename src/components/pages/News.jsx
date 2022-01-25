import React from "react";
import { Select, Typgoraphy, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";

// import the useQuery
import {getCryptoNewsQuery, useGetCryptoNewsQuery} from '../../services/cryptoNewsApi'
import { ConsoleSqlOutlined } from "@ant-design/icons/lib/icons";
// practice destructuring some properties from ant design
// getting Test and Title from Typography tag
const {Text, Title} = Typography;
// getting Option from Select
const {Option} = Select;

// same as Cryptocurrencies, create a service
// getting simplified field and simplified will be true if in the HomePage
// so can do a turnary in the count. if simplified is true then count is 10 else its 100 
const News = ({simplified}) => {
  // in the object get the data but renaming to cryptoNews
  // will be equal to useGetCryptoNewsQuery and inisde put an object 
  // and provide 2 parameters newsCategory, and the count

  const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10: 100 })
  // logging cryptoNews to see if theres data
  console.log(cryptoNews)
  // output undefined and shows an Error: No data found `state.cryptoNewsApi` Did you forget to add the reducer to the store?
  return <div>News</div>;
};

export default News;
