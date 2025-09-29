const gameState = require('./src/game/game-state.js').default;
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});