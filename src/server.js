import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello Express'));

app.listen(3000, () => console.log('Live on port 3000'));
