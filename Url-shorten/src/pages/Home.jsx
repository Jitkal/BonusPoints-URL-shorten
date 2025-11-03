import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import ShortenURL from '../components/ShortenURL';
import ResultURL from "../components/ResultURL.jsx";
import History from "../components/HistoryURL.jsx";

const Home=()=> {
    const [longUrl, setLongUrl] = useState('no')
    return (
        <div>
            <Navbar/>
            <ShortenURL longUrl={longUrl} setLongUrl={setLongUrl}/>
            <History/>
        </div>
    );
}

export default Home;