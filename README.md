# Jamming 🎵 

Jamming is a web application that allows users to create and save their own playlist to Spotify.

---
## Features

- **Search for tracks** - find songs by enetering a searched song title.
- **Create a playlist** - add and remove tracks from your playlist.
- **Save a playlist** - save your playlist directly to your Spotify account.


---

## 🚀 How to Run the Project?

### **1. Prerequisites**
Make sure you have installed:
- [Node.js](https://nodejs.org/) (LTS or later)
- A Spotify developer account

### **2. Configure Your Spotify App**
1. Log in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Create a new app and note down your **Client ID**.
3. Set the **Redirect URI** to e.g. : `http://localhost:3000`.

### **3. Clone the Repository**

### **4. Install dependencies**
```bash
npm install
```

### **5. Configure Environment Variables**
Create a .env file in the root directory of the project and add the following: 
```bash
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
REACT_APP_SPOTIFY_REDIRECT_URI=your_localhost
```

### **6. Start the Application**
```bash
npm start
```
---

## 🛡️ Technologies
- **React**
- **Spotify API**
- **React Testing Library**