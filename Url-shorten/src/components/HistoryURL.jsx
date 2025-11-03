import React, {useState,useEffect} from 'react';
import '../styles/HistoryURL.css'

    const HistoryURL = ({item}) => {

    const [countCopy, setCountCopy] = useState(0)
    console.log('item', item)
    useEffect(()=>{
        try{
            console.log('increase count',countCopy)

        }catch(error){
            console.log('error to increase count',error);
        }
    },[countCopy])
  return (
      <tr>
          <td className='UrlText'>
              <a href={item.longURL}>
                  {item.longURL}
              </a>
          </td>
          <td className='UrlText ShortLink'>
              <a href={item.shortURL}>
                  {item.shortURL}
              </a>
          </td>
          <td className='ClicksCount'>{item.clicks || 0} {countCopy}</td>
          <td className='CreateDate'>{new Date(item.created).toLocaleString()}</td>
          <td>
              <button className='Copy' onClick={()=>{navigator.clipboard.writeText(item.shortURL);setCountCopy(countCopy+1)}}>Copy</button>
          </td>
      </tr>
  );
};

export default HistoryURL;
