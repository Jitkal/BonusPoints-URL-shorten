import React, {useState,useEffect} from 'react';
import '../styles/HistoryURL.css'

    const HistoryURL = ({item}) => {


  return (
      <tr>
          <td>
              <div className='UrlText'>
                  <a href={item.longURL}>
                      {item.longURL}
                  </a>
                  <button className='Copy' onClick={() => {
                      navigator.clipboard.writeText(item.longURL);
                  }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-copy" viewBox="0 0 16 16">
                          <path fillRule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                      </svg>
                  </button>
              </div>
          </td>
          <td>
              <div className='UrlText ShortLink'>
                  <a href={item.shortURL}>
                      {item.shortURL}
                  </a>

                  <button className='Copy' onClick={()=>{navigator.clipboard.writeText(item.shortURL);}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-copy" viewBox="0 0 16 16">
                          <path fillRule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                      </svg>
                  </button>
              </div>
          </td>
          <td className='ClicksCount'>{item.countClick || 0}</td>
          <td className='CreateDate'>{new Date(item.created).toLocaleString()}</td>
      </tr>
  );
};

export default HistoryURL;
