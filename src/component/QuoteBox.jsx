import React, { useState } from 'react';

import quotes from '/src/data/quotes.json'

const QuoteBox = () => {

    const [index, setIndex]=useState(0)
    const [color, setColor] = useState('#7B1FA2')

    let randomIndex = Math.floor(Math.random()*quotes.length)
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    
    
    const showQuote = ()=>{
        setIndex(randomIndex)
        setColor(randomColor)
       
    }

    return (
        <div className="container-general" style={{background:`#${color}`}}>
            <div className="container-tarjet">
                <section className="container-quote">
                    <figure className='logo' style={{color:`#${color}`}}>🙶</figure>
                    <p className="quote" style={{color:`#${color}`}}>{quotes[index].quote}</p>
                </section>
                <section className='container-author'>
                    <p className="author" style={{color:`#${color}`}}>{quotes[index].author}</p>
                </section>
                <div className='container-button'>
                    <button onClick={showQuote} className='button' style={{background:`#${color}`}}>{'>'}</button>
                </div>
            </div> 
        </div>
        
    );
};

export default QuoteBox;