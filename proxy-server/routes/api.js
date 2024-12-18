import express from 'express';
import fetch from 'node-fetch';


const router = express.Router();

// Root endpoint
router.get('/', (req, res) => {
  res.send('API çalışıyor. Hoş geldiniz!');
});

// Canlı skorları getiren endpoint
router.get('/livescores', async (req, res) => {
  try {
    const response = await fetch('https://www.mackolik.com/perform/p0/ajax/components/competition/livescores/json?sports[]=Soccer&matchDate=2024-11-05');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('API hata:', error);
    res.status(500).json({ error: 'Veri çekilemedi' });
  }
});

export default router;
