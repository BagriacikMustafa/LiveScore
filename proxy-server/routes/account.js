import express from 'express';

const router = express.Router();

// Örnek bir endpoint
router.get('/', (req, res) => {
  res.send('Account endpointi çalışıyor!');
});




export default router;
