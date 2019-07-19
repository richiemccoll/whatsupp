import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/chats', (req, res) => {
  res.send('hey');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
