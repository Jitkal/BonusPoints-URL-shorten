import React, {useState,useEffect} from 'react';
import '../styles/HistoryURL.css'
import HistoryURL from "../components/HistoryURL.jsx";

const History = () => {

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
                                  <th>Copy Clicks</th>
                                  <th>Created</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                                {history && history.map((item, index) => (
                                    <HistoryURL key={item.created || index} item={item} />
                                ))}
                          </tbody>
                      </table>
                  </div>
              <button
                  className='Clear'
                  onClick={()=>{localStorage.removeItem('history'); setHistory([])}}
              >
                  clear history
              </button>

          </div>
  );
};

export default History;
