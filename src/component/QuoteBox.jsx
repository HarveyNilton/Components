import React, { useState } from 'react';

import quotes from '/src/data/quotes.json'

const QuoteBox = () => {

    const [index, setIndex]=useState(0)
    const [color, setColor] = useState('7B1FA2')

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
                    <figure className='logo' style={{color:`#${color}`}}>{
                        <svg style={{fill:`#${color}`}}        
                             viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.9919 7.66663H33.0082C34.7968 7.66663 36.2602 9.22507 36.2602 11.1298V31.909C36.2602 33.8138 34.7968 35.3722 33.0082 35.3722H6.9919C5.20328 35.3722 3.73987 33.8138 3.73987 31.909V11.1298C3.73987 9.22507 5.20328 7.66663 6.9919 7.66663Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.2602 11.1299L20 23.2511L3.73987 11.1299" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    }</figure>
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