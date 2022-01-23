import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../images/cryptomaticLogo.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypotomatic</Link>
          {/* button will be used to switch between the menus on mobile devices */}
          {/* <Button className="menu-control-container">

            </Button> */}
        </Typography.Title>
      </div>
      {/* Menu tag comes from ant design, and inside can have different Menu items */}
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        
      </Menu>
    </div>
  );
};

export default Navbar;
