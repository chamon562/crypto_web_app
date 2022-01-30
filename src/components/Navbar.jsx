import React, { useEffect, useState } from "react";
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
  // Add a change to navbar to me mobile responsive
  // add useState and useEfect hooks to help make responsive
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  // have 2 useEffects
  // first useEffect will have nothing in the dependancy array
  useEffect(() => {
    const handleResize = () => {
      // function that will set the screen size to window.
      // get the width of the screen with .innerWidth
      setScreenSize(window.innerWidth);
      // this is for whenever the window resizes want to handle the resize
      window.addEventListener("resize", handleResize);
    };
    // call handleResize() function to initialize
    handleResize();

    // need to call handleResize() function and need to return it. as the function, in useEffect
    // this return  will act as the component did unmount.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // this useEffect will be called whenever the screen size changes
  useEffect(() => {
    // want to see if (screenSize <768) pixels then setActiveMenu to false
    // else setActiveMenu(true)
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  // now that have active menu can use the variable to make some changes
  // will only show menu when the activeMenu is true

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={80} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptomatic</Link>
          {/* button will be used to switch between the menus on mobile devices 
            setActiveMen(!activeMenu) will toggle the menu 
          */}
        </Typography.Title>
        {/* <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        > */}
        <MenuOutlined
          className="menu-control-container"
          style={{color: "white"}}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        {/* </Button> */}
      </div>
      {/* Menu tag comes from ant design, and inside can have different Menu items */}

      {/* will only show menu when the activeMenu is true  
        if activeMenu is true then and only then render the Menu jsx block
        add the button in the div.logo-container above
      */}

      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
