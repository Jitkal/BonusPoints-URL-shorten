import React, {useState,useEffect} from 'react';
import '../styles/HistoryURL.css'

const HistoryURL = () => {

    const [history, setHistory] = useState(()=>{
        try{
            const saved=JSON.parse(localStorage.getItem('history')|| [])
            console.log('saved',saved);
            return saved;

        }catch(error){
            console.log('error to get history',error);
            return [];
        }

    });

    useEffect(()=>{
        try{
            setHistory(JSON.parse(localStorage.getItem('history')) || []);
            console.log('history',history);

        }catch(error){
            console.log('error to get history',error);
            return [];
        }
    }, [])
  return (
          <div className='HistoryURL'>
              <h1>URL History</h1>
                  <div className='TableContainer'>
                      <table>
                          <thead>
                              <tr>
                                  <th>Original URL</th>
                                  <th>Short URL</th>
                                  <th>Clicks</th>
                                  <th>Created</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                                {history && history.map((item, index) => (
                                      <tr key={index}>
                                          <td className='UrlText'>{item.longURL}</td>
                                          <td className='UrlText ShortLink'>{item.shortURL}</td>
                                          <td className='ClicksCount'>{item.clicks || 0}</td>
                                          <td className='CreateDate'>{new Date(item.created).toLocaleString()}</td>
                                          <td>
                                              <button className='Copy'>Copy</button>
                                          </td>
                                      </tr>
                                ))}
                          </tbody>
                      </table>
                  </div>
              <button className='Clear' onClick={()=>{localStorage.removeItem('history'); setHistory([])}}>clear history</button>

          </div>
  );
};

export default HistoryURL;
