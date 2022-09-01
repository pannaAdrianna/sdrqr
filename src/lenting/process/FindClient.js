import {useEffect, useState} from "react";
import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import {v4 as uuidv4} from 'uuid';
import faker from 'faker';

const FindClient = ({parentCallback}) => {


    const [list, setList] = useState([])


    function getAllClients() {
        // let newList=Array
        //
        // setList(newList)
        console.log("download list from db")
    }


    function addSomeClients() {
        const faker = require('faker')
        const items = [];

        items.push({
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            id: uuidv4()
        })
        items.push({
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            id: uuidv4()
        })
        items.push({
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            id: uuidv4()
        })
        items.push({
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            id: uuidv4()
        })
        console.log(items)
        setList(items);

    }

    useEffect(() => {
        addSomeClients()
        // getAllClients()
        console.log("FA: length list", list.length)
        console.log("FA: list", list)
    }, [])


    function onSearch() {

    }

    return (
        <>
            <Title level={3}>Find Client</Title>
            <p>Wyszukaj z listy</p>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{width: 200}}/>


        </>
    )

}
export default FindClient;
