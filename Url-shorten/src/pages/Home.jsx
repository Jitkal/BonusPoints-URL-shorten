import React, {useState,useEffect} from 'react';
import ShortenURL from '../components/ShortenURL';
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