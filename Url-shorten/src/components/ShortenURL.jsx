import React from 'react';
import '../styles/ShortenURL.css'
import ResultURL from "./ResultURL.jsx";
import axios from "axios";

const makeShorten = async (longURL) => {
    try {
        // const res = await axios(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
        console.log('Make ShortenURL',longURL);
        // console.log('res ShortenURL',res);
    }catch (error) {
        console.log('fetch short url error',error);
    }

}

const ShortenURL=(props)=> {
    return (
        <div className='Card'>
            <div className='Container'>
                <div className='Header'>
                    <h2>
                        URL Shortener
                    </h2>
                    <p>Transform long URLs into short, shareable links</p>
                </div>

                <div>
                    <div className='InputWrapper'>
                        <div>Enter your URL</div>
                        <input
                            type="text"
                            value={props.longUrl}
                            onChange={(e) => props.setLongUrl(e.target.value)}
                            placeholder="https://example.com/very/long/url"
                        />
                    </div>


                    <button type="submit" onClick={()=>makeShorten(props.longUrl)}>
                        make it shorter
                    </button>
                </div>
            
                <ResultURL shortURL={'tryshort'}/>
            </div>
        </div>
    )
}

export default ShortenURL;