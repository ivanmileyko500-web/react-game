const gameState = require('./src/game/game-state.js').default;
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/get-data', (req, res) => {
  res.json(gameState.getCurrentPart());
});

app.get('/api/next-part', (req, res) => {
  res.json(gameState.getNextPart());
});

app.post('/api/submit-answer', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});