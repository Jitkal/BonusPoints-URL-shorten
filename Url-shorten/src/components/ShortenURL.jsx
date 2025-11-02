import React from 'react';
import '../styles/ShortenURL.css'

const ShortenURL=()=> {
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
                            placeholder="https://example.com/very/long/url"
                        />
                    </div>


                    <button type="submit">
                        make it shorter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShortenURL;