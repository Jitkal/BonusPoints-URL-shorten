import React, { useEffect,useRef  } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import findLink from "../services/service.js";
import db from "../firebase.js";
import {doc, updateDoc, increment, query, collection, where} from "firebase/firestore";

const LinkTo = () => {
    const hasRun = useRef(false);
    const location = useLocation();
    console.log('location', location.pathname);
    useEffect( () => {
        if (hasRun.current) return; // skip if already run
        hasRun.current = true;
        const fetchAndRedirect = async ()=> {
            try {
                console.log(`http://localhost:5173${location.pathname}`)
                const link= await findLink(`http://localhost:5173${location.pathname}`);
                console.log('longURL',link.id);

                const docRef = doc(db, "urls", link.id);
                await updateDoc(docRef, { countClick: increment(1) });
                window.location.href = link.longURL;
            }catch (error) {
                console.log('error to find real url', error);
            }
        }
        fetchAndRedirect();
    }, []);

    return (
        <div>
            Loading...
        </div>
    );
};

export default LinkTo;
