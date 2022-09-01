import {useState} from "react";
import QRScan from "qrscan";
import {Button, Popconfirm} from "antd";
import Title from "antd/es/typography/Title";


const ReaderQR = ({parentCallback}) => {

    const [scanned, setScanned] = useState('');
    const [watching, setWatching] = useState(false);


    function onFind(value) {
        setScanned(value)
        parentCallback(value)
        setWatching(false)
    }

    return (
        <>
            <Title level={3}>Zeskanuj kod QR uczestnika</Title>
            {watching
                ? (
                    <QRScan onFind={onFind}/>
                )
                : (
                    <Popconfirm title="PopConfirm">
                        <Button onClick={() => setWatching(true)}>Scan</Button>
                        <h4>QR value: {scanned}</h4>
                    </Popconfirm>
                )
            }
        </>
    )

};
export default ReaderQR;
