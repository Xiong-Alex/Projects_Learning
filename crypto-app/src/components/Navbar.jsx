import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from "react-router-dom";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons";

import icon from "../images/crypt-logo.png";


const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptXchange</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/CryptoCurrencies">Crypto Currencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/Exchanges">Exhanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/News">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar;
