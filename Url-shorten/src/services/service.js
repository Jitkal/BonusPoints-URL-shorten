import db from "../firebase.js";
import { collection, query, where,getDocs } from "firebase/firestore";


const findLink=async (shortURL)=>{
    if (!shortURL) return;

    const q = query(collection(db, "urls"), where("shortURL", "==", shortURL));

    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching URL found.");
            return null;
        }

        querySnapshot.forEach((doc) => {
            console.log('Found URL:', doc.data());
        });

        // If you expect only one match, return the first document
        return querySnapshot.docs[0].data();
    } catch (error) {
        console.error("Error fetching URL:", error);
        return null;
    }
}


export default findLink;