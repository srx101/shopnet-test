import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { FlagOutlined } from '@ant-design/icons';
import Flag from 'react-world-flags';
import {countries} from '../utils/CountryCodes';

export default function ListItem({ country, setVisible, setCntr, modal }) {

    const { Title, Text } = Typography;

    const onCardClick = () => {
        setCntr(country.Country_text.toLowerCase())
        setVisible(true);
    }

    const cardStyle = {
        alignSelf: 'center',
        borderRadius: 10,
        margin: 15,

    }

    const flagStyle = {
        fontSize: 64
    }

    const flexStyle={
        flexDirection: 'column'
    }


    return (

        country.Country_text ? <Card style={cardStyle} bordered={!modal} hoverable={setVisible} onClick={!modal ? () => onCardClick() : null}>
            {!modal ? <Title style={{ margin: 10, color: '#2ec4b6' }} level={4}>{country.Country_text}</Title> : null}

            <Row align="middle" gutter={[8, 16]}>
                <Col xl={modal ? 24 : 4} md={8} xs={24}>
                    <Flag 
                        code={`${countries[`${country.Country_text}`]}`} 
                        fallback={<FlagOutlined style={flagStyle} />} 
                        height="100" 
                        style={{ borderRadius: 10, margin: 5 }}
                     />
                </Col>
                <Col xl={modal ? 24 : 4} md={4} xs={24}>
                    <div style={flexStyle} >
                        <Title level={5}>Muertes</Title>
                        <Text>{country['Total Deaths_text']}</Text>
                    </div>
                </Col>
                <Col xl={modal ? 24 : 4} md={4} xs={24}>
                    <div style={flexStyle}>
                        <Title level={5}>Recuperados</Title>
                        <Text>{country['Total Recovered_text']}</Text>
                    </div>
                </Col>
                <Col xl={modal ? 24 : 4} md={4} xs={24}>
                    <div style={flexStyle}>
                        <Title level={5}>Nuevos Casos</Title>
                        <Text>{country['New Cases_text'] !== '' ? country['New Cases_text'] : 'N/A'}</Text>
                    </div>
                </Col>
                <Col xl={modal ? 24 : 4} md={4} xs={24}>
                    <div style={flexStyle}>
                        <Title level={5}>Nuevas Muertes</Title>
                        <Text>{country['New Deaths_text'] !== '' ? country['New Deaths_text'] : 'N/A'}</Text>
                    </div>
                </Col>
                <Col xl={modal ? 24 : 4} md={4} xs={24}>
                    <div style={flexStyle}>
                        <Title level={5}>Última Actualización</Title>
                        <Text>{country['Last Update']}</Text>
                    </div>
                </Col>
            </Row>
        </Card> : null
    )
}



