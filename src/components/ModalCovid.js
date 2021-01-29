import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import ListItem from './ListItem';
import axios from 'axios';

export default function ModalCovid({ visible, setVisible, cntr }) {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        axios.get(`https://covid-19.dataflowkit.com/v1/${cntr}`)
            .then(({ data }) => {
                setCountryData(data)
            }).catch((e) => {
                console.log(e);
            })
    }, [cntr])


    return (
        <Modal title={countryData.Country_text} visible={visible} onCancel={() => setVisible(false)} >
            <ListItem country={countryData}/>
        </Modal>
    )
}
