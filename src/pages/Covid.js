import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ListItem from '../components/ListItem';
import ModalCovid from '../components/ModalCovid';
import { Typography, Skeleton } from 'antd';

export default function Covid() {
    const [visible, setVisible] = useState(false);
    const [cntr, setCntr] = useState('');
    const [covidData, setCovidData] = useState([]);
    const [loading, setLoading] = useState(true)
    const { Title } = Typography;


    useEffect(() => {

        axios.get('https://covid-19.dataflowkit.com/v1')
            .then(({ data }) => {
                console.log(data);
                setCovidData(data)
                setLoading(false)
            }).catch((e) => {
                console.log(e);
            });

    }, [])




    return (
        <div>
            <Title style={{textAlign:'center'}}>Casos Mundiales de COVID-19</Title>
            {loading ? <Skeleton active /> : 
            covidData.map((country) => (
                <ListItem setVisible={setVisible} setCntr={setCntr} country={country} />
            ))}
            <ModalCovid visible={visible} cntr={cntr} setVisible={setVisible} />
        </div>
    )
}
