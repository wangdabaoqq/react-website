import React from 'react'
import { Icon, Menu, Carousel } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.css'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
export default class Header extends React.Component {
  state = {
    current: 'mail'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render () {
   return (
     <nav className="nav">
     <header className="navClass">
        <div className="logo">
          <img alt="sss" src="https://www.legutech.com/images/index/logo.png"></img>
        </div>
       <Menu
       className="MenuName"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item key="mail">
        <NavLink to="/home">
          <Icon type="mail" />
          首页</NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />企业定位
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />解决方案</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipayss">
          关于小桔灯
        </Menu.Item>
        <Menu.Item key="alipays">
          关于小桔灯
        </Menu.Item>
        <Menu.Item key="alipay">
          关于小桔灯
        </Menu.Item>
      </Menu>
      </header>
      <Carousel  effect="fade" >
      <div>
      <img
          src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
          alt=""
        />
      </div>
      <div> <img
          src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
          alt=""
        /></div>
      <div> <img
          src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
          alt=""
        /></div>
      <div> <img
          src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
          alt=""
        /></div>
    </Carousel>
     </nav>
   ) 
  }
}
