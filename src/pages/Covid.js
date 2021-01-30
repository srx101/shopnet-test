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
                setCovidData(data)
                setLoading(false)
            }).catch((e) => {
                console.log(e);
            });

    }, [])

    const headerStyle = {
        backgroundColor: '#2ec4b6',
        textAlign: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    };

    const titleStyle = {
        textAlign: 'center',
        color: 'white',
        padding: 20
    }

    return (
        <div>
            <div style={headerStyle}>
                <Title style={titleStyle}>Casos Mundiales de COVID-19</Title>
            </div>
            {loading ? <Skeleton active /> :
                covidData.map((country) => (
                    <ListItem
                        key={country.Country_text}
                        setVisible={setVisible}
                        setCntr={setCntr}
                        country={country}
                    />
                ))}
            <ModalCovid
                visible={visible}
                cntr={cntr}
                setVisible={setVisible}
            />
        </div>
    )
}
