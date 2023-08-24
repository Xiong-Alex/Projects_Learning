import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import './App.css';

import { Navbar, Homepage, Exchanges, CryptoCurrencies, CryptoDetails, News } from "./components";
// import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="app">

      <div className="navbar">
      <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">

            <Routes>

              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/Exchanges" element={<Exchanges />} />
              <Route exact path="/CryptoCurrencies" element={<CryptoCurrencies />} />
              <Route exact path="/Crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/News" element={<News />} />

            </Routes>
            
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{color: 'white'}}>
            CryptoXchange <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/Exchanges">Exchanges</Link>
            <Link to="/News">News</Link>
          </Space>
        </div>
      </div>


    </div>
  );
}

export default App;
