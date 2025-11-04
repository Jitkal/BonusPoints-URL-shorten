import React, { useState, useEffect } from 'react'

import '../styles/RecentURL.css'
import CopyButton from "./CopyButton.jsx";

const RecentURL=({recent})=> {
    return (
        <div id='recent'>
                <div className='Header'>
                    <h2>
                        Recent Links (latest 3 only)
                    </h2>
                </div>

                    {
                            recent && recent.length > 0 ? (
                                [...recent].reverse().map((item, index) => (

                                    <div className='Item' key={index}>
                                        <div className='UrlText'>
                                            <a href={item.shortURL} className='ShortUrl'>
                                                {item.shortURL}
                                            </a>
                                            <div className='LongUrl'>
                                                {item.longURL}
                                            </div>
                                        </div>
                                        <CopyButton url={item.shortURL}/>
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