# Bonus Points
Create a simple URL shortener web application, preferably deployed on your platform of choice (AWS, Netlify, Firebase, Vercel, etc). You can see the other websites as references, such as tinyurl.com, bit.ly, etc.

---

## How to Use the Web App

### 🏠 Home Page — `/`  
**URL:** `http://localhost:5173/`  

This is the main page where users can shorten URLs.

#### 🪄 Features:
- Enter a **long URL** into the input box.  
- Click **MAKE IT SHORTER** to generate a short link.
  > ⚠️ The MAKE IT SHORTER button is disabled if the input is not a valid URL (e.g., missing https://).
- The **shortened link** will appear in **Your short URL** box.  
- The system automatically saves the latest **3 shortened URLs** for quick access.  
- You can **copy** the short link with one click.
- You can click the short link to open the destination website in a new tab.


---

### 🕓 History Page — `/history`  
**URL:** `http://localhost:5173/history`  

This page displays the complete list of all URLs you have shortened.

#### 📋 Features:
- Shows all your past shortened links saved in **localStorage** (no login required).  
- Each entry includes:
  - ⏰ **Created Time** — when the link was shortened  
  - 🌐 **Original Link** — the full input URL  
  - ✂️ **Short Link** — the shortened version you can open or copy  
  - 🔢 **Click Count** — counts how many times the short link has been opened  

- Includes a **“Clear All History”** button to remove all stored links and reset the history list.

> ⚙️ History data is stored only on your browser (localStorage).
---

## 📚 References

### 🎥 Tutorials & Learning Resources
- [React URL Shortener Tutorial by PedroTech](https://www.youtube.com/watch?v=dCLhUialKPQ)
- [Firebase Hosting for React Apps](https://www.youtube.com/watch?v=geIwBIuo-ug)
- [URL Shortener Frontend Project Walkthrough](https://www.youtube.com/watch?v=5Mi7RmmZj4Q)
- [React LocalStorage Tutorial](https://www.youtube.com/watch?v=t5rQJB4-qpQ)

### 🎨 Design & Icons
- [CSS Loaders](https://cssloaders.github.io/) — used for loading animation  
- [Bootstrap Icons – Check Icon](https://icons.getbootstrap.com/icons/check/) — used in success or copy confirmation elements



