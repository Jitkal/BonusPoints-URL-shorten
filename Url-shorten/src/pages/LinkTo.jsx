import React, { useEffect,useRef  } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {findLink} from "../services/service.js";
import db from "../firebase.js";
import {doc, updateDoc, increment, query, collection, where} from "firebase/firestore";
import '../styles/LinkTo.css'

const LinkTo = () => {
    const hasRun = useRef(false);
    const location = useLocation();
    useEffect( () => {
        if (hasRun.current) return;
        hasRun.current = true;
        const fetchAndRedirect = async ()=> {
            try {
                const link= await findLink(`http://localhost:5173${location.pathname}`);
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
        <div id='link-to'>
            <span className="LinkToLoader">Loading</span>
        </div>
    );
};

export default LinkTo;
