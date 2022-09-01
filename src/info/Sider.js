import React, {useState} from "react";
import {Menu, Layout, Icon, Button, Image} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons";


import {useNavigate} from "react-router";
import {Header} from "antd/es/layout/layout";
import {GiMeeple} from "react-icons/gi";

const {SubMenu} = Menu;

export default function Sider(props) {

    const [collapsed, setCollapsed] = useState(false)

    const navigate = useNavigate()
    const {handleClick} = props;

    function toggle() {
        setCollapsed(!collapsed)
    };


    const menuItemsAccount = [

        {
            name: 'Dashboard',
            text: '1',
            icon: <UserOutlined color="secondary"/>,
            path: '/dashboard'
        },
        {
            name: 'Rent a game',
            text: '2',
            icon: <GiMeeple color="secondary"/>,
            path: '/rent'
        },
        {
            name: 'Check Client Status',
            text: '3',
            icon: <UserOutlined color="secondary"/>,
            path: '/checkStatus'
        },


    ];


    return (

        <Layout.Menu collapsible
                      collapsed={collapsed}
                      onCollapse={() => setCollapsed(!collapsed)}
                      style={{
                          overflow: "auto",
                          height: "100vh",
                          position: "sticky",
                          top: 0,
                          left: 0
                      }}>
            <Menu theme="dark" mode="inline" openKeys={"sub1"}>
                {menuItemsAccount.map((item) => (
                    <Menu.Item
                        button
                        key={item.text}
                        onClick={handleClick}
                        // onClick={() => navigate(item.path)}
                    >{item.icon }
                        <span className="nav-text">{item.name}</span>

                    </Menu.Item>
                ))}
            </Menu>
        </Layout.Menu>

    );
}


