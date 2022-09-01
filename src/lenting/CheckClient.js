import Layout, {Content, Header} from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";

import {Button, Menu, Space, Typography} from "antd";
import { Row, Col } from 'antd';

const {Title} = Typography;


const CheckClient = () => {


    return (

        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">

                    <Title level={1}>Check Client</Title>
                    <Row>
                        <Col flex={2}>2 / 5</Col>
                        <Col flex={3}>3 / 5</Col>
                    </Row>

                </Space>


            </Content>
        </Layout>
    )
}
export default CheckClient
