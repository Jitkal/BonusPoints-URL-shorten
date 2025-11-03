import React, {useState,useEffect} from 'react';
import '../styles/HistoryURL.css'
import HistoryURL from "../components/HistoryURL.jsx";
import {loadHistory} from "../services/service.js";

const History = () => {

    const [history, setHistory] = useState(()=>{
        try{
            const saved=JSON.parse(localStorage.getItem('history')|| [])
            return saved;

        }catch(error){
            console.log('error to get history',error);
            return [];
        }

    });

    useEffect(()=>{
        try{
            const fullHistory=async ()=>{
                const load=await loadHistory(JSON.parse(localStorage.getItem('history')) || [])
                setHistory(load);

                return load;
            }
            // setHistory(JSON.parse(localStorage.getItem('history')) || []);
            // console.log('fullHistory',fullHistory());
            fullHistory()
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
