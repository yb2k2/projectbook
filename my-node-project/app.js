const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/duy1', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware để xử lý JSON
app.use(express.json());

// Các route sẽ được định nghĩa ở đây
const duyRouter=require('.//routers/duy')
app.use('/duy',duyRouter)
app.use(express.json)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
