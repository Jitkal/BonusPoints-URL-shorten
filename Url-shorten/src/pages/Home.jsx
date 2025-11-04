import React, {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import ShortenURL from '../components/ShortenURL';
import ResultURL from "../components/ResultURL.jsx";
import History from "../components/HistoryURL.jsx";
import RecentURL from "../components/RecentURL.jsx";

const Home=()=> {
    const [longUrl, setLongUrl] = useState('')
    const [recent, setRecent] = useState()
    useEffect(()=>{
        setRecent(JSON.parse(sessionStorage.getItem('recently')))
    },[longUrl])

    return (
        <div id='Home'>
            <ShortenURL longUrl={longUrl} setLongUrl={setLongUrl}/>
            <RecentURL recent={recent}/>
        </div>
    );
}

export default Home;