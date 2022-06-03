import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import { Places } from './components/Places'

export default function App() {
    const cards = Places.map(item => {
        return (
            <Card
                img={item.img}
                name={item.name}
                date={item.date}
                info={item.info}
                facts={item.facts}
            />
        )
    })
    return (
        <>
            <Header />,
            {cards}
        </>
    )
}

