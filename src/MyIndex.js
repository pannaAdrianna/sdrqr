import Layout, {Content, Header} from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Button, Card, Menu, Typography} from "antd";
import Footer from "./info/Footer";
import {NavBar} from "./info/NavBar";
import Sider from "./info/Sider";
import Dashboard from "./lenting/Dashboard";
import LendGameProcess from "./lenting/process/LendGameProcess";
import CheckClient from "./lenting/CheckClient";

const {Title} = Typography;


const MyIndex = ({children}) => {
    const [render, updateRender] = useState(1);


    const handleMenuClick = menu => {
        updateRender(menu.key);
    };

    const components = {
        '1': <Dashboard/>,
        '2': <LendGameProcess/>,
        '3': <CheckClient/>,

    };

    return (

        <Layout>
            <Sider handleClick={handleMenuClick}/>
            <Layout>
                <Content>
                        {components[render]}
                </Content>
                <Footer/>
            </Layout>
        </Layout>
    )
}
export default MyIndex
