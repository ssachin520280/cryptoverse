import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Updated import
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes> {/* Updated */}
            <Route path="/" element={<Homepage />} /> {/* Updated */}
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2024
          <Link to="/"> &nbsp;Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
