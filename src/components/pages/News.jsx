import React, { useState } from "react";
import { Select, Typgoraphy, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";

// import the useQuery
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
// practice destructuring some properties from ant design
// getting Test and Title from Typography tag
const { Text, Title } = Typography;
// getting Option from Select
const { Option } = Select;
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
// same as Cryptocurrencies, create a service
// getting simplified field and simplified will be true if in the HomePage
// so can do a turnary in the count. if simplified is true then count is 10 else its 100
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  // in the object get the data but renaming to cryptoNews
  // will be equal to useGetCryptoNewsQuery and inisde put an object
  // and provide 2 parameters newsCategory, and the count

  // Learned that I can put a turnary as a value for the count key in an object.
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  // logging cryptoNews to see if theres data
  console.log(cryptoNews);

  // get data from cryptoApi
  const { data } = useGetCryptosQuery(100);
  //FIXED* output undefined and shows an Error: No data found `state.cryptoNewsApi` Did you forget to add the reducer to the store?

  // if statement check if no cryptoNews exist .value then return Loading
  if (!cryptoNews?.value) return "Loading...";
  // looping through news data and mapping through cryptoNews
  // and getting one news article
  return (
    <Row gutter={[24, 24]}>
      {/* get news of one specific crypto currency user is interested in */}
      {/* filterOption takes a call back function where it takes in an input and option 
        its filtering out the option so it only shows the one for the selected cryptocurrency
      */}
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {/* render out the opttions 
              default option is Cryptocurrency, meaning all currency
              want to get real options about specific currency for the currency already
              have.
              all the names of the cryptocurrency already known and fetched inside Homepage.jsx and Cryptocurrencies.jsx data
            */}
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {/* map through data from cryptoApi and display news on a specific crypto in select menu */}
            {data?.data?.coins?.map((coin)=>(
              // shows the valule of coin.name in the drop down option in Select
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        // for each news show a column with Col
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                {/* adding image the reason for use of the ?. because some news is may not have the image
                so also add an or use a demo image created 
               */}
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                />
              </div>
              {/* render description if the length is longer than 100 characters then render a template 
              string news.description.substring from 0 to 100... add dots to show that there could be more info
              else if the description is less than 100 characters then render the news.description
                
              */}
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}{" "}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  {/* add the timing of published with moment library */}
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.dataPublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
