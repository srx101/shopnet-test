import React from 'react';
import { Card, Typography } from 'antd';


export default function ListItem({ country, setVisible, setCntr }) {

    const { Title, Text } = Typography;

    const onCardClick = () => {
        setCntr(country.Country_text.toLowerCase())
        setVisible(true);
    }

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    }

    const cardStyle = {
        alignContent: 'center',
        textAlign: 'center',
        margin: 15
    }

    return (
        <Card style={cardStyle} hoverable={setVisible} onClick={setVisible ? () => onCardClick() : null}>
            <Title style={{ margin: 10 }} level={4}>{country.Country_text}</Title>


            <Card.Grid hoverable={false} style={gridStyle}>
                <div style={{ flexDirection: 'column' }} >
                    <Title keyboard level={5}>Total Muertes</Title>
                    <Text type="danger">{country['Total Deaths_text']}</Text>
                </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Total Recuperados</Title>
                    <Text type='success'>{country['Total Recovered_text']}</Text>
                </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Nuevos Casos</Title>
                    <Text>{country['New Cases_text'] !== '' ? country['New Cases_text'] : 'N/A'}</Text>
                </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Nuevas Muertes</Title>
                    <Text>{country['New Deaths_text'] !== '' ? country['New Deaths_text'] : 'N/A'}</Text>
                </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Última Actualización</Title>
                    <Text>{country['Last Update']}</Text>
                </div>
            </Card.Grid>


            {/*             
            <div style={{ display: "flex", marginBottom: '1.5rem', textAlign: 'center', alignContent: 'center' }}>
                <div style={{ flexDirection: 'column' }} >
                    <Title keyboard level={5}>Total Muertes</Title>
                    <Text type="danger">{country['Total Deaths_text']}</Text>
                </div>
            </div>

            <div style={{ display: "flex", marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Total Recuperados</Title>
                    <Text>{country['Total Recovered_text']}</Text>
                </div>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Nuevos Casos</Title>
                    <Text>{country['New Cases_text']}</Text>
                </div>
            </div>

            <div style={{ display: "flex", marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Nuevas Muertes</Title>
                    <Text>{country['New Deaths_text']}</Text>
                </div>
                <div style={{ flexDirection: 'column' }}>
                    <Title keyboard level={5}>Última Actualización</Title>
                    <Text>{country['Last Update']}</Text>
                </div>
            </div> */}
        </Card>
    )
}
