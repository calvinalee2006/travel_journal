import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Places from './components/Places'

export default function App() {
    const cards = Places.map(item => {
        return (
            <Card
                img={item.img}
                name={item.name}
                date={item.date}
                info={item.info}
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

{/* <Card
img={Dubai}
name="Dubai"
date="2009 February 2010 - 2013 July"
info=" This is Dubai!!!"
/>,
<Card
img={England}
name="England"
date="August 2010 - December 2010"
info=" This is ENGLAND!!!"
/>,
<Card
img={Japan}
name="Japan"
date="Hope to visit in the future"
info=" This is Japan!!!"
/> */}