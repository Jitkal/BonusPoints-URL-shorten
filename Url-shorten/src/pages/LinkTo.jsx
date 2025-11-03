import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import findLink from "../services/service.js";

const LinkTo = () => {
    // const { shortCode } = useLocation(); // first part: developer.mozilla.org
    const location = useLocation();
    // const rest = location.pathname.replace(`/shortURL/${shortCode}/`, ''); // tI0NVl
    console.log('location', location.pathname);
    useEffect( () => {
        const fetchAndRedirect = async ()=> {
            try {
                console.log(`http://localhost:5173${location.pathname}`)
                const link= await findLink(`http://localhost:5173${location.pathname}`);
                console.log('longURL',link.longURL);
                window.location.href = link.longURL;
            }catch (error) {
                console.log('error to find real url', error);
            }
        }
        fetchAndRedirect();
    }, [location.pathname]);

    return (
        <div>
            Loading...
        </div>
    );
};

export default LinkTo;
