import axios from 'axios';
import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Heartbeat server running at http://localhost:${port}`);
  setInterval(async () => {
    try {
      const response = await axios.get('https://blop-app-codsoft-backend.onrender.com/blog/getpostall/');
      console.log(`Heartbeat sent. Status: ${response}`);
    } catch (error) {
      console.error(`Error sending heartbeat: ${error}`);
    }
  }, 2 * 60 * 1000); // 5 minutes
});




