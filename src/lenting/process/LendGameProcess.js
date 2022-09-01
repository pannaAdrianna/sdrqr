import Layout, {Content} from "antd/es/layout/layout";
import {Card, Col, Divider, Row, Space} from "antd";


import {Steps, Button, message} from 'antd';
import React, {useEffect, useState} from "react";

import {UserOutlined} from "@ant-design/icons";


import ReaderQR from "./ReaderQR";
import BarcodeReader from "./BarcodeReader";
import FindClient from "./FindClient";


const {Step} = Steps;


const LendGameProcess = data => {
    const [current, setCurrent] = useState(0);
    const [clientQR, setClientQR] = useState('');
    const [gameCode, setGameCode] = useState('');


    useEffect(() => {

    }, []);


    const callbackClient = (value) => {
        setClientQR(value)
    }

    const callbackGame = (value) => {
        setGameCode(value)
    }


    const steps = [
        {
            title: 'Zeskanuj QR klienta',
            icon: <UserOutlined/>,
            content: <>
                <Row>
                    <Col flex={3}><ReaderQR parentCallback={callbackClient}/></Col>
                    <Col flex={1}><Divider type="vertical" style={{height: "100%"}}/></Col>
                    <Col flex={3}><FindClient parentCallback={callbackClient}/> </Col>
                </Row>


            </>,
        },
        {
            title: 'Zeskanuj grę',
            icon: <UserOutlined/>,
            content:
                <>
                    <BarcodeReader parentCallback={callbackGame}/>
                </>
        },
        {
            title: 'Podsumowanie',
            icon: <UserOutlined/>,
            content:
                <div className="site-card-border-less-wrapper">
                    <Card title="Podsumowanie jazdy">
                        <p>Rider name: imię</p>
                    </Card>
                </div>
        },

    ];


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    return (
        <Layout>
            <Content>
                <Space direction="vertical">

                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                    <Layout>


                        <Content>
                            <Card title="Dane zaciągnięte ( to nie obchodzi Was)">
                                <p>Client QR: {clientQR}</p>
                                <p>Game: {gameCode}</p>
                            </Card>
                            <Card>
                                <div className="steps-content">{steps[current].content}</div>
                            </Card>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}

                                {current > 0 && current !== steps.length - 1 && (
                                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </Content>

                    </Layout>


                </Space>
            </Content>
        </Layout>
    )
}
export default LendGameProcess;
