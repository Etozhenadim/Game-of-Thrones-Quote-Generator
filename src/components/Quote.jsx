import axios from "axios";
import {useEffect, useState} from "react";

export const Quote= ()=>{
    const [quote, setQuote] = useState();

    const getRandomMovie = () => {
        axios("https://api.gameofthronesquotes.xyz/v1/random")
            .then((response) => response.data)
            .then((result) => {
                console.log(result);
                setQuote(result);
            });
    };

    useEffect(() => {
        getRandomMovie();
    }, []);

    return(
        <div className="quote__wrapper">
            {quote ? (
                <div className="quote__description">
                    <h2 className="quote__description--sentence">{quote.sentence}</h2>
                    <h3 className="quote__description--name">{quote.character.name}</h3>
                    <p className="quote__description--house">{quote.character.house.name}</p>
                </div>
            ) : (
                <h2>No Quote No FUN</h2>
            )}

            <button type="button"  className='quote__button' onClick={getRandomMovie}>
                New Quote
            </button>
        </div>
    )
}