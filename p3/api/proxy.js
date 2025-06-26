
import axios from 'axios';

export default async function handler(req, res) {
  // CORS headers for browser requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyvRk0E-vTgsS5xpQ_Lz8mAw33U3XmuFkhpxSrzrl05yAg4jgSvQknM0LDaiQD5b87cnA/exec';
      const response = await axios.post(scriptUrl, req.body, {
        headers: { 'Content-Type': 'application/json' }
      });
      let data = response.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          data = { result: 'failed', error: 'Invalid JSON from Apps Script' };
        }
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ result: 'failed', error: error.message });
    }
  } else {
    res.status(405).json({ result: 'failed', error: 'Method not allowed' });
  }
}
