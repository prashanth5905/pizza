const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 4000; // Or any port you like

app.use(cors());
app.use(express.json());

app.post('/feedback', async (req, res) => {
  try {
    // Forward the data to your Google Apps Script endpoint
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyvRk0E-vTgsS5xpQ_Lz8mAw33U3XmuFkhpxSrzrl05yAg4jgSvQknM0LDaiQD5b87cnA/exec';
    const response = await axios.post(scriptUrl, req.body, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Apps Script response:', response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ result: 'failed', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
