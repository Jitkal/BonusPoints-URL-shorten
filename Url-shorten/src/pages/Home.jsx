import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import ShortenURL from '../components/ShortenURL';
import ResultURL from "../components/ResultURL.jsx";
import History from "../components/HistoryURL.jsx";

const Home=()=> {
    const [longUrl, setLongUrl] = useState('https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-transform')
    return (
        <div>
            <ShortenURL longUrl={longUrl} setLongUrl={setLongUrl}/>
        </div>
    );
}

export default Home;