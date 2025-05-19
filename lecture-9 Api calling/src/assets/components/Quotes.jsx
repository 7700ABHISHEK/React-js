import React, { useEffect, useState } from 'react'

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getNewQuote();
    }, []);

    const getNewQuote = async () => {
        const URL = "https://dummyjson.com/quotes/random";

        const res = await fetch(URL);
        const data = await res.json();

        setQuotes([...quotes, data]);
    }

    return (
        <div className="col-4">
            <div className="quotes">
                <button className='btn btn-danger my-5' onClick={() => { getNewQuote() }}>Get Quotes</button>
                {
                    quotes.length == 0
                        ? <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        : quotes.map((quote) =>
                            <figure>
                                <blockquote className="blockquote">
                                    <p>{quote.quote}</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">{quote.author}</cite>
                                </figcaption>
                            </figure>
                        )
                }
            </div>
        </div>
    )
}

export default Quotes