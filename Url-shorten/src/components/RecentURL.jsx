import React, { useState, useEffect } from 'react'

import '../styles/RecentURL.css'
import ResultURL from "./ResultURL.jsx";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase.js";
import HistoryURL from "./HistoryURL.jsx";

const RecentURL=({recent})=> {
    return (
        <div id='recent'>
                <div className='Header'>
                    <h2>
                        3 Recent Links
                    </h2>
                </div>

                    {
                            recent && recent.length > 0 ? (
                                recent.map((item, index) => (

                                    <div className='Item' key={index}>
                                        <div className='UrlText'>
                                            <a href={item.shortURL} className='ShortUrl'>
                                                {item.shortURL}
                                            </a>
                                            <div className='LongUrl'>
                                                {item.longURL}
                                            </div>
                                        </div>
                                        <button className='Copy' onClick={() =>navigator.clipboard.writeText(item.shortURL)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 className="bi bi-copy" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div/>
                            )

                    }
        </div>
    )
}

export default RecentURL;