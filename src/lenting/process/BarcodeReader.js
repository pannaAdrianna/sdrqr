import {useState} from "react";

import Title from "antd/es/typography/Title";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import {Button, Popconfirm} from "antd";


const BarcodeScanner = ({parentCallback}) => {

    const [scanned, setScanned] = useState('Not Found');

    const [watching, setWatching] = useState(false);


    function handleScan(data) {
        setScanned(data)
        parentCallback(data)
        setWatching(false)
    }


    return (
        <>
            <Title level={3}>Zeskanuj Barcode gry</Title>
            {watching
                ? (
                    <BarcodeScannerComponent
                        width={500}
                        height={500}
                        onUpdate={(err, result) => {
                            if (result) handleScan(result.text)
                            else setScanned('Not Found')
                        }}
                    />
                )
                :
                (
                    <Popconfirm title="PopConfirm">
                        <Button onClick={() => setWatching(true)}>Scan</Button>
                        <h4>BarCode value: {scanned}</h4>
                    </Popconfirm>
                )}
        </>
    )

};
export default BarcodeScanner;
