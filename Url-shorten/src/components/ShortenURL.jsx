import React, { useState, useEffect } from 'react'

import '../styles/ShortenURL.css'
import ResultURL from "./ResultURL.jsx";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase.js";

const generateShortCode = (length = 6) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const getBaseURL = (longURL) => {
    try {
        const url = new URL(longURL);
            return `http://localhost:5173/shortURL/${url.hostname}`;
    } catch (e) {
        console.error("Invalid URL:", e);
        return '';
    }
};

const makeShorten = async (longURL,setResult) => {
    try {
        const shortURL = `${await getBaseURL(longURL)}/${generateShortCode()}`;
        const newSave = {
            longURL: longURL,
            shortURL: shortURL,
            countClick: 0,
            created: Date.now(),
        };
        await addDoc(collection(db, "urls"), newSave);
        const saved=JSON.parse(localStorage.getItem('history')) || []
        saved.push({shortURL: shortURL});
        localStorage.setItem('history', JSON.stringify(saved));
        setResult(shortURL)
    }catch (error) {
        console.log('firebase error',error);
    }
}

const ShortenURL=(props)=> {
    const [result, setResult] = useState()
    const [isCorrectURL, setIsCorrectURL] = useState(null)
    useEffect(() => {
        const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
        if (props.longUrl && urlRegex.test(props.longUrl)) {
            setIsCorrectURL(null);
        } else {
            setIsCorrectURL('Please enter a valid URL starting with http:// or https://');
        }
    }, [props.longUrl]);
    return (
        <div className='Card'>
            <div className='Container'>
                <div className='Header'>
                    <h2>
                        URL Shortener
                    </h2>
                    <p>Transform long URLs into short links</p>
                </div>

                <div>
                    <div className='InputWrapper'>
                        <div>Enter your URL</div>
                        <input
                            type="url"
                            value={props.longUrl}
                            onChange={(e) => props.setLongUrl(e.target.value)}
                            placeholder="https://example.com/very/long/url"
                        />
                        {
                            isCorrectURL?
                                <div className='error'>
                                    {isCorrectURL}
                                </div>
                                :<div/>
                        }
                    </div>


                    <button
                        type="submit"
                        disabled={isCorrectURL}
                        onClick={()=>makeShorten(props.longUrl,setResult)}
                    >
                        make it shorter
                    </button>
                </div>
                <ResultURL shortURL={result}/>
            </div>
        </div>
    )
}

export default ShortenURL;