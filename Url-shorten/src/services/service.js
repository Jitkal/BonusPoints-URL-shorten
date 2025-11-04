import db from "../firebase.js";
import { collection, query, where,getDocs } from "firebase/firestore";


export const findLink=async (shortURL)=>{
    if (!shortURL) return;

    const q = query(collection(db, "urls"), where("shortURL", "==", shortURL));

    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching URL found.");
            return null;
        }

        const docSnap = querySnapshot.docs[0];
        return {
            id: docSnap.id,
            ...docSnap.data()
        }
    } catch (error) {
        console.error("Error fetching URL:", error);
        return null;
    }
}

export const loadHistory=async (history)=>{
    const fullHistory=[]
    if (history){
        for (const shortURL of history) {
            const dataHis=await findLink(shortURL.shortURL)
            fullHistory.push(dataHis)
        }
    }
    return fullHistory

}
