import React, { useState, useEffect } from 'react'
import '../styles/ResultURL.css'
import db from "../firebase.js";
import { collection, query, where,getDocs } from "firebase/firestore";
import {findLink} from "../services/service.js";


const ResultURL=(props)=> {
    const [realURL, setRealURL] = useState(null);

    useEffect(() => {
        const fetchURL = async () => {
            if (props.shortURL) {
                const result = await findLink(props.shortURL);
                setRealURL({shortURL: result.shortURL,longURL: result.longURL});
                console.log("result URL:", result);
                const recently = JSON.parse(sessionStorage.getItem('recently'))||[];
                recently.push(result);
                console.log(recently.length);
                if (recently.length >=4) {
                    recently.shift();
                }
                sessionStorage.setItem('recently', JSON.stringify(recently));
            }
        };

        fetchURL();
    }, [props.shortURL]);
    return (
        <div>
            <div className='InputWrapper'>
                <div>Your short URL</div>
                <div className='ResultURL'>
                    <div>
                        {
                            props.shortURL ?
                                realURL ?
                                    <a href={props.shortURL}>
                                        {props.shortURL}
                                    </a>
                                : <span className="loader"/>
                            :<div/>
                        }
                    </div>
                    <button className='Copy' onClick={() =>navigator.clipboard.writeText(props.shortURL)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-copy" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ResultURL;