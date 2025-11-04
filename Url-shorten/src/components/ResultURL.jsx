import React, { useState, useEffect } from 'react'
import '../styles/ResultURL.css'
import {findLink} from "../services/service.js";
import CopyButton from "./CopyButton.jsx";

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
                    <CopyButton url={props.shortURL}/>
                </div>
            </div>
        </div>
    )
}

export default ResultURL;