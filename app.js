const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');
const connectDb = require('./db/connect');
require('dotenv').config();
app.use(express.json());
app.use(express.static('./public'));
const PORT = 5000;


// ルーティング設計
app.use('/api/v1/tasks', taskRoute);

// データベースとの接続
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
      app.listen(PORT, console.log('サーバーが起動しました。'));
  } catch (err) {
    console.log(err);
  }
}

start();