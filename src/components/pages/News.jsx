import React from "react";
import { Select, Typgoraphy, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";

// import the useQuery
import {
  getCryptoNewsQuery,
  useGetCryptoNewsQuery,
} from "../../services/cryptoNewsApi";
import { ConsoleSqlOutlined } from "@ant-design/icons/lib/icons";
// practice destructuring some properties from ant design
// getting Test and Title from Typography tag
const { Text, Title } = Typography;
// getting Option from Select
const { Option } = Select;

// same as Cryptocurrencies, create a service
// getting simplified field and simplified will be true if in the HomePage
// so can do a turnary in the count. if simplified is true then count is 10 else its 100
const News = ({ simplified }) => {
  // in the object get the data but renaming to cryptoNews
  // will be equal to useGetCryptoNewsQuery and inisde put an object
  // and provide 2 parameters newsCategory, and the count

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  // logging cryptoNews to see if theres data
  console.log(cryptoNews);
  //FIXED* output undefined and shows an Error: No data found `state.cryptoNewsApi` Did you forget to add the reducer to the store?

  // if statement check if no cryptoNews exist .value then return Loading
  if (!cryptoNews?.value) return "Loading...";
  // looping through news data and mapping through cryptoNews
  // and getting one news article
  return (
    
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          // for each news show a column with Col
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    
  );
};

export default News;
