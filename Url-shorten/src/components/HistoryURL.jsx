import React from 'react';
import '../styles/HistoryURL.css'
import CopyButton from "./CopyButton.jsx";

const HistoryURL = ({item}) => {


  return (
      <tr>
          <td>
              <div className='UrlText'>
                  <a href={item.longURL}>
                      {item.longURL}
                  </a>

                  <CopyButton url={item.longURL}/>
              </div>
          </td>
          <td>
              <div className='UrlText ShortLink'>
                  <a href={item.shortURL}>
                      {item.shortURL}
                  </a>

                  <CopyButton url={item.shortURL}/>
              </div>
          </td>
          <td className='ClicksCount'>{item.countClick || 0}</td>
          <td className='CreateDate'>{new Date(item.created).toLocaleString()}</td>
      </tr>
  );
};

export default HistoryURL;
