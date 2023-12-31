import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi';
import { CryptoCurrencies, News } from '.';


const { Title } = Typography;

const Homepage = () => {

    const {data, isFetching } = useGetCryptosQuery(10);
    // const {data, isFetching } = useGetCryptosQuery();

    const globalStats = data?.data?.stats;

    console.log(data);

    if(isFetching) return "Loading..."

  return (
    <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total CryptoCurrencies" value= {globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Total markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Crypto Currencies</Title>
            <Title level={3} className="show-more"><Link to="/CryptoCurrencies">Show More</Link></Title>
        </div>
        {/* <CryptoCurrencies simplified /> */}
        <CryptoCurrencies simplified={true}/>

        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/News">Show More</Link></Title>
        </div>
        <News simplified></News>
    </>
  )
}

export default Homepage;

